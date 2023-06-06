class ExpenseSerializer < ActiveModel::Serializer
  attributes :id, :merchant, :date, :amount, :budget_id
  
  # belongs_to :budget
  # belongs_to :category
  
  # has_many :notes
  # def amount 
  #   "$#{'%.2f' %object.amount}"
  # end

end
