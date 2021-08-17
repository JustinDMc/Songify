class CommentsController < ApplicationController
   
    def index 
        comments = Comment.all
        render json: comments, only: [:user_id, :post_id, :content], include: [:user]
    end  

    def create  
        comment = Comment.create(comment_params)
        render json: comment, only: [:user_id, :post_id, :content]
    end  

    private
     
    def comment_params  
        params.require(:comment).permit(:user_id, :post_id, :content)
    end 

end
