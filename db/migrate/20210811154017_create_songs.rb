class CreateSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :songs do |t|
      t.integer :quiz_id 
      t.string :genre  
      t.string :artist 
      t.string :title 
      t.string :album_img_url

      t.timestamps
    end
  end
end
