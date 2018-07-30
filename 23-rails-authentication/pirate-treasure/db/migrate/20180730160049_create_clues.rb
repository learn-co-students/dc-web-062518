class CreateClues < ActiveRecord::Migration[5.1]
  def change
    create_table :clues do |t|
      t.text :message
      t.float :lat
      t.float :lon
      t.references :treasure, index: true

      t.timestamps
    end
  end
end
