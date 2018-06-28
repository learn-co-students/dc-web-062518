require './user'
require 'pry'

class Tweet
  # message - limited to 140
  # time
  # likes
  # TODO:
  # user
  # # shares / retweets
  # # comments / replies

  attr_reader :message, :likes, :time, :user

  @@all = []

  # class method
  def self.all
    @@all
  end



  # likes should start at 0
  # time should be now
  # should belong to a user
  #   tweet can refer to its user
  #   should have a method #user that returns the user
  def initialize(message, user)
    @user = user # does not create a new user - just gives a name to the user that was passed in
    @@all << self
    user.add_tweet(self)
    @message = message
    @likes = 0
    @time = Time.now
  end
end

dad = User.new("dad jokes", "dadtellsjokes")
comp_sci_fact = User.new("Computer Science", "CompSciFact")
boat_joke = Tweet.new("Where does a boat go when it is sick? The dock", dad)
avatar_joke = Tweet.new("rt this and I won\342\200\231t draw your avi", dad)
lambda_confusion = Tweet.new("The first problem proved to be undecidable was the equivalence of arbitrary lambda expressions.", comp_sci_fact)

binding.pry
puts "hi"
