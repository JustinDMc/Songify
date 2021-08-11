class CreateQuizQuestions < ActiveRecord::Migration[6.1]
  def change
    create_table :quiz_questions do |t|
      t.integer :quiz_id 
      t.integer :question_id

      t.timestamps
    end
  end
end
