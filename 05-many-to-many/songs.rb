require 'pry'
class Song
  # belong to artist

  @@all = []

  attr_reader :name, :artist, :genre

  def initialize(name, artist, genre)
    @name = name
    @artist = artist
    # artist.songs << self
    # genre.songs << self
    # belong to genre
    @genre = genre
    @@all << self
  end

  def self.all
    @@all
  end
end

class Artist
  attr_reader :name
  # attr_accessor :songs

  def initialize(name)
    @name = name
    # @songs = []
  end

  def songs
    # song is the _single source of truth_
    Song.all.select { |song| song.artist == self }
  end

  def song_names
    songs.map { |song| song.name }
  end

  # has many genres through songs
  def genres
    # binding.pry
    self.songs.map { |s| s.genre }.uniq
  end
end

class Genre
  attr_reader :name
  # attr_accessor :songs

  def initialize(name)
    @name = name
    # @songs = []
  end

  def songs
    # single source of truth
    Song.all.select { |song| song.genre == self }
  end

  # has many artists through songs
  def artists
    self.songs.map { |song| song.artist }.uniq
  end
end

ts = Artist.new("Tay")
weird_al = Artist.new("Al")
pop = Genre.new("Pop")
rock = Genre.new("Rock")
bs = Song.new("Blank Space", ts, pop)
trouble = Song.new("Trouble", ts, pop)
ebay = Song.new("Ebay", weird_al, pop)

ts.songs

binding.pry
puts "hi"
