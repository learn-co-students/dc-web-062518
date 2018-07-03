class Tweet
  attr_accessor :message, :username
  ALL = []

  def self.all
    ALL
  end

  def initialize(props={})
    @message = props['message']
    @username = props['username']
    ALL << self
  end

  def save
    # @message
    # @username
    DB[:conn].execute("INSERT INTO tweets (username, message) VALUES (?, ?);", @username, @message)
    self
  end

  def self.create(props={})
    # Tweet.create({ message, username })
    # new tweet
    # save
    Tweet.new(props).save
  end

  # Read
  # SELECT
  # by keywords in a message
  # find by tweets by tags

  # find by id
  def find_by_id
    
  end

  # find tweets by username


  # arguments of username, message
  # def self.create_rob_tweet
    # DB[:conn].execute("INSERT INTO tweets (username, message) VALUES ('rob', 'hello, world');")
  # end

  def self.select_all_tweets
    DB[:conn].execute("SELECT * FROM tweets")
  end
end
