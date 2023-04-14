class Expense < ApplicationRecord
    belongs_to :user
    belongs_to :category

    # validates :merchant, :date, :amount, presence: true
end
