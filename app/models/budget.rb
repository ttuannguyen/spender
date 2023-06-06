class Budget < ApplicationRecord
    belongs_to :user
    has_many :expenses
    # has_many :users, through: :expenses

    validates :name, presence: true, uniqueness: true 
    validates :amount, presence: true
end
