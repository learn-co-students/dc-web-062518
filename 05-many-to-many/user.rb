require 'pry'
class User

  HANDLE_PREFIX = "@"

  attr_reader :tweets, :name
  @@all = []

  def initialize(name, handle)
    @name = name
    @handle = handle
    @@all << self
    @tweets = [] # could be a hash
  end

  def add_tweet(tweet)
    @tweets << tweet
  end

  def post_tweet(message)
    Tweet.new(message, self)
    # add_tweet(new_tweet) - done for us in the Tweet#initialize
  end

  def self.all
    @@all
  end

  def self.reset
    @@all = []
  end

  def handle
    "#{HANDLE_PREFIX}#{@handle}"
  end
end

# binding.pry

puts "hi"
