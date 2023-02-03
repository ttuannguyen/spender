class CategoriesController < ApplicationController
    
    # GET "/categories"
    def index
        # categories = current_user.categories
        # render json: categories
        render json: Category.all
    end

    def expenses_index
        category = Category.find_by(id: params[:id])
        render json: category
    end

    # GET "/categories/:id"
    def show
        category = Category.find_by(id: params[:id])
        if category 
            render json: category.to_json, status: :ok 
        else 
            render json: { error: "Category not found", status: :unauthorized} 
        end
    end

    # POST "/categories"
    def create 
        category = Category.create(category_params)
        render json: category, status: :created
    end

    private

    def category_params
        params.permit(:name)
    end

    # def set_category
    #     @category = Category.find(params[:id])
    # end

    # def current_user
    #     current_user = User.find_by(id: session[:customer_id])
    # end

    # def authorized_user
    #     authorized_user = render json: { error: "Not authorized" }, status: :unauthorized unless @category.user_id == current_user.id
    # end

end
