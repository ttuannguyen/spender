class User < ApplicationRecord
    has_secure_password
    has_many :expenses
    has_many :categories, -> { distinct }, through: :expenses

    # if we want to have user/:id/notes
    has_many :notes, -> { distinct }, through: :expenses 

    validates :username, presence: true, uniqueness: true 
    validates :password, :password_confirmation, presence: true

end
