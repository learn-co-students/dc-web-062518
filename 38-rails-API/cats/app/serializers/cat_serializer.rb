class CatSerializer < ActiveModel::Serializer
  attributes :id, :name, :breed, :age, :quote
  has_many :hobbies
end
