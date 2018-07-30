class CreateTreasures < ActiveRecord::Migration[5.1]
  def change
    create_table :treasures do |t|
      t.references :user, index: true
      t.string :name
      t.integer :value
      t.float :lat
      t.float :lon

      t.timestamps
    end
  end
end
