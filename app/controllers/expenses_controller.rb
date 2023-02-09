class ExpensesController < ApplicationController
    
    # GET "/expenses"
    def index
        # render json: Expense.all
        render json: current_user.expenses
    end    

    # GET "/expenses/:id"
    def show
        expense = Expense.find_by(id: params[:id])
        if expense 
            render json: expense.to_json, status: :ok 
        else 
            render json: { error: "Expense not found", status: :unauthorized} 
        end
    end

    # POST 
    def create 
        expense = current_user.expenses.create(expense_params)
        # we should only be retrieving the user id from the current session (i.e. most secure way) 
        # expense = Expense.create(expense_params)
        # category = Category.find_by(id: params[:category_id])
        # expense = category.expenses.create(expense_params)
        render json: expense, status: :created
    end
    
    # PATCH 
    def update
        expense = current_user.expenses.find_by(id: params[:id])
        expense.update(expense_params)
        # byebug
        render json: expense, status: :accepted
    end

    # DELETE
    def destroy
        expense = current_user.expenses.find_by(id: params[:id])
        expense.destroy
        head :no_content
    end

    private

    # def current_user
    #     User.find_by(id: session[:user_id])
    # end

    def expense_params
        params.permit(:id, :merchant, :date, :amount, :category_id) # got rid of the user's id
    end
    
end
