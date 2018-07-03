class Tweet
  attr_accessor :message, :username

  def self.all
    tweets = self.select_all_tweets
    tweets.map { |hash| Tweet.new(hash) }
  end

  def initialize(props={})
    @message = props['message']
    @username = props['username']
  end

  def save
    # @message
    # @username

    # BUG: creates a new tweet when we save an existing tweet
    sql = <<-SQL
INSERT INTO tweets (username, message)
VALUES (?, ?);
SQL
    DB[:conn].execute(sql, @username, @message)
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
  def self.find_by_id(id)
    array_with_data = DB[:conn].execute("SELECT * FROM tweets WHERE id = ?", id)
    Tweet.new(array_with_data[0])
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
