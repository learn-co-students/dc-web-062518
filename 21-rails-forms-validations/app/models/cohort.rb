class Cohort < ApplicationRecord
  validates :name, presence: true, length: { minimum: 6 }

  has_many :students, dependent: :destroy
end
