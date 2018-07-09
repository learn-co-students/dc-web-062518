class Customer < ActiveRecord::Base
  has_many :tickets
  # has many flights through tickets
  has_many :flights, through: :tickets
end
