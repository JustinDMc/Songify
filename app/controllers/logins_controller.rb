class LoginsController < ApplicationController

    def create 
        user = User.find_by(username: params[:username])
        if user &.authenticate(params[:password])
            render json: {id: user.id, username: user.username}
        else 
            render json: {message: "Invalid username or password"}
        end
    end

end
