class Note < ApplicationRecord
    belongs_to :user

    # belongs_to :user # we would need user id

    validates :content, presence: true
end
