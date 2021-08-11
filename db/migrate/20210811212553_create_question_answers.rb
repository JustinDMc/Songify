class CreateQuestionAnswers < ActiveRecord::Migration[6.1]
  def change
    create_table :question_answers do |t|
      t.integer :question_id
      t.string :content

      t.timestamps
    end
  end
end
