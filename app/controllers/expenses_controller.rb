class ExpensesController < ApplicationController
    
    def index
        render json: Expense.all
    end    

    def show
        expense = Expense.find_by(id: params[:id])
        if expense 
            render json: expense.to_json, status: :ok 
        else 
            render json: { error: "Expense not found", status: :unauthorized} 
        end
    end
    
end
