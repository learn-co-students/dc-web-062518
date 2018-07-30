class Treasure < ApplicationRecord
  belongs_to :user
  has_many :clues
end
