class Flight < ActiveRecord::Base
  # tickets
  has_many :tickets
  has_many :customers, through: :tickets
end
