class CreateExpenses < ActiveRecord::Migration[6.1]
  def change
    create_table :expenses do |t|
      t.string :merchant
      t.string :date
      t.float :amount
      t.timestamps
    end
  end
end
