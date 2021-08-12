class CommentsController < ApplicationController
   
    def index 
        comments = Comment.all
        render json: comments, only: [:user_id, :post_id, :content] 
    end  

end
