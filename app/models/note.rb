class Note < ApplicationRecord
    belongs_to :expense

    # belongs_to :user # we would need user id
end
