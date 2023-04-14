class AddUserIdAndBudgetIdToExpenses < ActiveRecord::Migration[6.1]
  def change
    add_column :expenses, :user_id, :integer, null: false
    add_column :expenses, :budget_id, :integer, null: false
  end
end
