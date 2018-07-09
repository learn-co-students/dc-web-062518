class CreateCustomers < ActiveRecord::Migration[5.2]
  def change
    create_table :customers do |t|
      t.string :name
      # t.integer :id - added automatically

      # does not need any information about the tickets
      # has_many :tickets


      # created_at, updated_at
      t.timestamps
    end
  end
end
