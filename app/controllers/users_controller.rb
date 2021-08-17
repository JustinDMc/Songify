class UsersController < ApplicationController

    def index 
        users = User.all
        render json: users, only: [:id, :username, :password, :profile_pic_url] 
    end  

end
