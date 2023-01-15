class CategoriesController < ApplicationController
    
    # GET "/categories"
    def index
        render json: Category.all
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


end
