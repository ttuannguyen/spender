class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  
  has_many :categories, through: :expenses
  has_many :expenses
  # has_many :notes

end
