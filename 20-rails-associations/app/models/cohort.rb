class Cohort < ApplicationRecord
  has_many :students, dependent: :destroy
end
