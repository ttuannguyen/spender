class NoteSerializer < ActiveModel::Serializer
  attributes :id, :content, :expense_id
end
