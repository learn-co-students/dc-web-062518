require 'pry'

# Need an _all_ method in Trip class!

class Listing
  # Listing
  #   address
  #   description
  #   city
  #   has many Trips
  #   has many guests through Trips
  attr_accessor :address #, :description, :city
  @@all = []

  def initialize(address)#, description, city)
    @address = address
    @@all << self
    # @trips = []
  end

  def trips
    Trip.all.select do |trip|
      trip.listing == self # (white_house)
    end
  end

  def guests
    self.trips.map { |trip| trip.guest }
  end

  def self.all
    @@all
  end

  # listing that has the most trips
  def self.most_popular_listing
    self.all.max_by(&:number_of_trips)
  end

  def number_of_trips
    trips.count
  end

    # how do we get to all the listings, so that we can search?
      # X class variable - stores all the instances of the listings
    # X number of trips for each listing
    # do the comparison of the number of trips



  # def trips
  # @trips
  # end
  # todo trips
  # todo guests
end

class Guest
  attr_accessor :name
  # Guest
  #   name
  #   has many Trips (#trips returns an array of trips)
  #   has many Listings through Trips (#listings returns an array of listings)
  def initialize(name)
    @name = name
  end
end

class Trip
  # Trip
  #   X date
  #   X belongs_to a guest (#guest returns the guest)
  #   X belongs_to listing (#listing returns the listing)
  attr_accessor :date, :listing, :guest

  @@all = []

  def initialize(date, listing, guest)
    @date = date
    @listing = listing
    @guest = guest
    @@all << self
  end

  def self.all
    @@all
  end
end

white_house = Listing.new("1600 Pennsylvania Ave")
blue_house = Listing.new("1601 Penn Ave")
rob = Guest.new("Rob")
field_trip = Trip.new("Today", white_house, rob)
other_trip = Trip.new("Today", blue_house, rob)
other_trip2 = Trip.new("Tomorrow", blue_house, rob)

binding.pry

puts "hi"
