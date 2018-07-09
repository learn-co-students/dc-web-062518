class CreateFlights < ActiveRecord::Migration[5.2]
  def change
    create_table :flights do |t|
      t.text :destination
      t.text :origin  # origin
      t.datetime :departure_time
      t.datetime :arrival_time

      t.timestamps # created_at, updated_at
    end
  end
end
