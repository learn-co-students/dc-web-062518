class Player < ApplicationRecord
  belongs_to :team, dependent: :destroy

  validates :name, presence: true
end
