class PostsController < ApplicationController

    def index 
        posts = Post.all
        render json: posts, only: [:user_id, :song_id, :thoughts, :likes], include: [:user, :song]
    end  

end
