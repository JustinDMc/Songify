class QuizzesController < ApplicationController

    def index 
        quizzes = Quiz.all 
        render json: quizzes, only: [:id, :topic], include: :questions
    end  

end
