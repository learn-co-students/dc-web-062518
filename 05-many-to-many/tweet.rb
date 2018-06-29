require './user'
require 'pry'

class Tweet
  attr_reader :message, :likes, :time, :user
  @@all = []

  def initialize(message, user)
    @user = user
    @@all << self
    user.add_tweet(self)
    @message = message
    @likes = 0
    @time = Time.now
  end

  def self.all
    @@all
  end
end

dad = User.new("dad jokes", "dadtellsjokes")
comp_sci_fact = User.new("Computer Science", "CompSciFact")
boat_joke = Tweet.new("Where does a boat go when it is sick? The dock", dad)
avatar_joke = Tweet.new("rt this and I won\342\200\231t draw your avi", dad)
lambda_confusion = Tweet.new("The first problem proved to be undecidable was the equivalence of arbitrary lambda expressions.", comp_sci_fact)

binding.pry
puts "hi"
