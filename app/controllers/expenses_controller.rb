class ExpensesController < ApplicationController
    
    # # GET "/expenses"
    def index
        render json: Expense.all
        # render json: current_user.expenses
    end    

    # # GET "/expenses/:id"
    # def show
    #     expense = Expense.find_by(id: params[:id])
    #     if expense 
    #         render json: expense.to_json, status: :ok 
    #     else 
    #         render json: { error: "Expense not found", status: :unauthorized} 
    #     end
    # end

    # POST 
    def create 
        # expense = current_user.expenses.create!(expense_params)
        # expense = Expense.create(expense_params)
        budget = Budget.find_by(id: params[:budget_id])
        expense = budget.expenses.create!(expense_params)
        render json: expense, status: :created
    end

    
    # PATCH 
    def update
        # byebug
        budget = Budget.find_by(id: params[:budget_id])
        expense = budget.expenses.find_by(id: params[:id])
        expense.update!(expense_params)
        render json: expense, status: :accepted
        # if expense 
        #     expense.update!(expense_params)
        #     render json: expense, status: :accepted
        # else
        #     render json: {error: "Unable to update"}, status: :not_found
        # end
    end

    # DELETE
    def destroy
        expense = current_user.expenses.find_by(id: params[:id])
        expense.destroy
        render json: expense
        # head :no_content
    end

    private

    # def current_user
    #     User.find_by(id: session[:user_id])
    # end

    def expense_params
        params.permit(:id, :merchant, :date, :amount, :budget_id) # got rid of the user's id
    end

end
