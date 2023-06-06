class AddBudgetIdToExpenses < ActiveRecord::Migration[6.1]
  def change
    add_column :expenses, :budget_id, :integer, null: false
  end
end
