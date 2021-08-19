class PostsController < ApplicationController

    def index 
        posts = Post.all
        render json: posts, only: [:id, :user_id, :song_id, :thoughts, :likes], include: [:user, :song, :comments]
    end  

    def create 
        post = Post.create(post_params)
        render json: post, only: [:user_id, :song_id, :thoughts, :likes], include: [:user, :song]
    end  

    def update 
        post = Post.find(params[:id])
            if post 
                render json: post 
            else 
                render json: {error: "Post not found"}, status: :not_found
            end
    end  

    private  

    def post_params  
        params.require(:post).permit(:user_id, :song_id, :thoughts, :likes)
    end 

end
