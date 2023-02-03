class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :user_expenses
  has_many :expenses

  # NOTE: we're doing this custom method to limit the expenses to only the user's expenses
  # otherwise, the expenses from all users will be nested under each category
  def user_expenses
    current_user.expenses.where('category_id = ?', object.id)
  end

end