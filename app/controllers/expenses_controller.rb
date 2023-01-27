class ExpensesController < ApplicationController
    
    # GET "/expenses"
    def index
        render json: Expense.all
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

    # POST "/expenses"
    def create 
        expense = current_user.expenses.create(expense_params)
        render json: expense, status: :created
    end
    
    # PATCH "/expenses/:id"
    def update
        expense = Expense.find_by(id: params[:id])
        expense.update(expense_params)
        render json: expense, status: :accepted
    end

    # DELETE
    def destroy
        expense = Expense.find_by(id: params[:id])
        expense.destroy
        head :no_content
    end

    private

    def current_user
        User.find_by(id: session[:user_id])
    end

    def expense_params
        params.permit(:merchant, :date, :amount, :user_id, :category_id)
    end
    
end
