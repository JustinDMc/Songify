class QuestionsController < ApplicationController

    def index 
        questions = Question.all
        render json: questions, only: [:content] 
    end  

end
