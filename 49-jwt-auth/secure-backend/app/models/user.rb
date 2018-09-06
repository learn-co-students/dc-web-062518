class User < ApplicationRecord
  has_many :likes

  has_secure_password
  # password = "password123"
  # no reader
  # password_digest = SOME RANDOM STRING

  # name, password - are these right?
  # .authenticate(password_attempt) => false if password is wrong
  # if the password is right, returns the user object

  
end
