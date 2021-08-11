Quiz.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('quizzes')

quiz1 = Quiz.create(topic: "Music")