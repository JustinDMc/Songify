class PostsController < ApplicationController

    def index 
        posts = Post.all
        render json: posts, only: [:user_id, :song_id, :thoughts, :likes], include: [:user, :song]
    end  

    def create 
        post = Post.create(post_params)
        render json: post, only: [:user_id, :song_id, :thoughts, :likes], include: [:user, :song]
    end  

    private  

    def post_params  
        params.require(:post).permit(:user_id, :song_id, :thoughts, :likes)
    end 

end
