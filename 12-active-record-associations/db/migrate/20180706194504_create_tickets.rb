class CreateTickets < ActiveRecord::Migration[5.2]
  def change
    create_table :tickets
    add_column :tickets, :row, :integer
    add_column :tickets, :seat, :string
    # add_timestamps :tickets
  end
end
