require 'pry'
class User
  # what should a user have?

  HANDLE_PREFIX = "@"

  # name
  # handle
  # X email
  # X prof_pic
  # X password
  # TODO:
  # has many tweets
  #   user can refer to the tweets

  # name can be updated
  # handle cannot
  # attr_accessor :name
  # attr_reader :handle
  attr_reader :tweets, :name

  # def tweets
    # @tweets
  # end

  def name=(new_name)
    @name = new_name + " (edited)"
  end

  def add_r
    self.name = @name + "r"
  end

  def add_tweet(tweet)
    @tweets << tweet
  end

  @@all = []

  def self.all
    @@all
  end

  def self.reset
    # ALL << something allowed
    # ALL = [] disallowed
    # ALL.clear would have worked...
    @@all = []
  end

  def initialize(name, handle)
    @name = name
    @handle = handle
    @@all << self
    @tweets = [] # could be a hash
  end

  def handle
    "#{HANDLE_PREFIX}#{@handle}"
  end
end

# binding.pry

puts "hi"
