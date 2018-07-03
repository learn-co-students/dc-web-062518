require 'bundler'
Bundler.require # require 'pry' and require 'sqlite3'

DB = {
  conn: SQLite3::Database.new('db/twitter.db')
}

DB[:conn].results_as_hash = true

require_relative '../lib/tweet.rb'
require_relative '../lib/tweets_app.rb'
