class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :user_expenses 
  # has_many :expenses
  # has_many :users, through: :expenses

  # NOTE: we're doing the below custom method to limit the expenses to only the user's expenses
  # otherwise, the expenses from all users will be nested under each category

  def user_expenses
    # byebug
    current_user.expenses.where('category_id = ?', object.id)
  end

end