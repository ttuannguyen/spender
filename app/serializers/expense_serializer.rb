class ExpenseSerializer < ActiveModel::Serializer
  attributes :id, :merchant, :date, :amount, :category_id, :user_id

  def amount 
    "$#{'%.2f' %object.amount}"
  end

end
