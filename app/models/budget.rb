class Budget < ApplicationRecord
    has_many :expenses
    has_many :users, through: :expenses

    # validates :name, presence: true, uniqueness: true 
end
