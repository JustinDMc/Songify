class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.integer :user_id 
      t.integer :song_id
      t.string :thoughts
      t.integer :likes

      t.timestamps
    end
  end
end
