class QuestionAnswersController < ApplicationController

    def index 
        question_answers = QuestionAnswer.all
        render json: question_answers, only: [:question_id, :content] 
    end  

end
