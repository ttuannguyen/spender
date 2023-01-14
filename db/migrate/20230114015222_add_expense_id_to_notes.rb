class AddExpenseIdToNotes < ActiveRecord::Migration[6.1]
  def change
    add_column :notes, :expense_id, :integer, null: false
  end
end
