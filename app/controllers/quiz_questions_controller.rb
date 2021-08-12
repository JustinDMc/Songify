class QuizQuestionsController < ApplicationController

    def index 
        quiz_questions = QuizQuestion.all
        render json: quiz_questions, only: [:quiz_id, :question_id] 
    end  

end
