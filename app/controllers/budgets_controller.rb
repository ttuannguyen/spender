class BudgetsController < ApplicationController
    # GET "/budgets"
    def index
        # byebug
        budgets = current_user.budgets
        # render json: budgets
        render json: budgets.order(name: :ASC)
        # render json: Budget.all
    end

    # POST
    def create
        # byebug
        budget = current_user.budgets.create!(budget_params)
        # budget = Budget.create!(budget_params)
        render json: budget, status: :created
    end

    # UPDATE
    def update
        budget = current_user.budgets.find_by(id: params[:id])
        budget.update!(budget_params)
        render json: budget, status: :accepted
        # if expense 
        #     expense.update!(expense_params)
        #     render json: expense, status: :accepted
        # else
        #     render json: {error: "Unable to update"}, status: :not_found
        # end
    end


    private
    def budget_params
        params.permit(:id, :name, :amount)
    end

end

# class CategoriesController < ApplicationController
#     # GET "/categories"
#     def index
#         # categories = current_user.categories
#         # render json: categories
#         render json: Category.all
#     end

#     # # for testing
#     # def expenses_index
#     #     category = Category.find_by(id: params[:id])
#     #     expenses = category.expenses
#     #     render json: expenses
#     # end

#     # # GET "/categories/:id"
#     # def show
#     #     category = Category.find_by(id: params[:id])
#     #     if category 
#     #         render json: category.to_json, status: :ok 
#     #     else 
#     #         render json: { error: "Category not found", status: :unauthorized} 
#     #     end
#     # end

#     # POST
#     def create 
#         # byebug
#         category = Category.create!(category_params)
#         render json: category, status: :created
#     end

#     private

#     def category_params
#         params.permit(:name)
#     end

#     # def set_category
#     #     @category = Category.find(params[:id])
#     # end

#     # def current_user
#     #     current_user = User.find_by(id: session[:customer_id])
#     # end

#     # def authorized_user
#     #     authorized_user = render json: { error: "Not authorized" }, status: :unauthorized unless @category.user_id == current_user.id
#     # end
# end
