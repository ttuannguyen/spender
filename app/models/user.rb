class User < ApplicationRecord
    has_secure_password
    
    has_many :expenses
    has_many :categories, -> { distinct }, through: :expenses
    has_many :notes, -> { distinct }, through: :expenses

end
