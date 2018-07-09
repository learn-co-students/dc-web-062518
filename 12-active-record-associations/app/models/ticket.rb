class Ticket < ActiveRecord::Base
  # belongs to
  # #flight - reader
  # #flight=(some flight) - writes

  belongs_to :flight
  # def flight
    # (some sql here)
  # end

  belongs_to :customer

  # #flight_id - read the column
  # attr_accessor :flight
  # def initialize(flight)
    # @flight = flight
  # end

  # ticket.flight
end
