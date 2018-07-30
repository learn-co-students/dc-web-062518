class User < ApplicationRecord
  has_many :treasures
  validates :name, presence: true
  validates :password_digest, presence: true, length: { minimum: 8 }
  has_secure_password
  
  # setters for password
  # create or update(password: ''), will get transformed on the way in
  # authenticate('password') - returns the user if successful, returns false otherwise
  # hashing the input, checking against the password_digest

  # exercise - write a better password validation (note: look up some kind of entropy rules, or other rules for passwords)
end
