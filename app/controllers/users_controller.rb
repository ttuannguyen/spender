class UsersController < ApplicationController

    skip_before_action :authorized, only: [:create]
    
    # GET "/me"
    def show 
        # user = User.find_by(id: params[:id])
        user = User.find_by(id: session[:user_id])
        if user 
            render json: user, status: :ok 

            # # if we want to have user/:id/notes, make the association in the user controller then include: ['notes'] in the render json above
            # if we want to nest 1 more level deep => include: ['categories', 'categories.expenses', 'expenses', 'expenses.notes']
        else 
            render json: "User not found", status: :unauthorized
        end
    end

    # Testing 
    # def expenses_index
    #     expenses = current_user.expenses
    #     render json: expenses
    # end

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
