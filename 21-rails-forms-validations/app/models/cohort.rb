class Cohort < ApplicationRecord
  validates :name, presence: true, length: { minimum: 6 }

  has_many :students, dependent: :destroy

  def capitalized_name
    name.capitalize
  end
end
