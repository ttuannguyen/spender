class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :user_expenses
  has_many :expenses

  # when putting the byebug in, the server stops running
  # byebug

  def user_expenses
    current_user.expenses.where('category_id = ?', object.id)
  end

end