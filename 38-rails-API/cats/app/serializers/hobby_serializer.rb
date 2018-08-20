class HobbySerializer < ActiveModel::Serializer
  attributes :id, :title, :description
  has_many :cats
end
