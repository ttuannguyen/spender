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
        expense = Expense.create(expense_params)
        render json: expense, status: :created
    end

    private
    def expense_params
        params.permit(:merchant, :date, :amount, :user_id, :category_id)
    end


    
end
