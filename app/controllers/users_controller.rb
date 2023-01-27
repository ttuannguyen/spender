class UsersController < ApplicationController
    
    # GET "/users/:id"
    def show 
        # user = User.find_by(id: params[:id])
        user = User.find_by(id: session[:user_id])
        if user 
            render json: user, status: :ok
        else 
            render json: "User not found", status: :unauthorized
        end
    end

    # POST "/users"
    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    private 
    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

end
