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
