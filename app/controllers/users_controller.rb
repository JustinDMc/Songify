class UsersController < ApplicationController

    def index 
        users = User.all
        render json: users, only: [:id, :username, :password, :profile_pic_url] 
    end  

    def create 
        user = User.create(user_params)
        if user.valid?
            render json: {id: user.id, username: user.username, profile_pic_url: user.profile_pic_url}
        else 
            render json: {message: customer.errors.full_messages}
        end
    end  

    private 

    def user_params 
        params.require(:user).permit(:username, :password, :profile_pic_url)
    end  

end
