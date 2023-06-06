class BudgetSerializer < ActiveModel::Serializer
  attributes :id, :name, :amount#, :user_expenses

  # belongs_to :user
  has_many :expenses

  # NOTE: we're doing the below custom method to limit the expenses to only the user's expenses
  # otherwise, the expenses from all users will be nested under each budget
  # def user_expenses
  #   current_user.expenses.where('budget_id = ?', object.id)
  # end
  
end
