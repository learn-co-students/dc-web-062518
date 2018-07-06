class AddFlightIdToTickets < ActiveRecord::Migration[5.2]
  def change
    # goal: add a column to tickets table with the flight id
    add_column :tickets, :flight_id, :integer
    add_column :tickets, :customer_id, :integer

    # drop
    # drop_table :flights
  end
end
