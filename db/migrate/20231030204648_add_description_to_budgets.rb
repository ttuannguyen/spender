class AddDescriptionToBudgets < ActiveRecord::Migration[6.1]
  def change
    add_column :budgets, :description, :string
  end
end
