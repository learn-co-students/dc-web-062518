# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

pirates = User.create([{name: "Blackbeard", password: "pw"}, {name: "Hook", password: "pw"}, {name: "John Silver", password: "pw"}, {name: "Crunch", password: "pw"}, {name: "Jack Sparrow", password: "pw"}, {name: "Monkey D. Luffy", password: "pw"}, {name: "Orm the Red", password: "pw"}, {name: "Bluebeard", password: "pw"}, {name: "Graybeard", password: "pw"}, {name: "Yellowbeard", password: "pw"}])

statuses = ["Buried", "Sunken", "Hidden", "Lost", "Tarnished", "Grand", "Stolen", "Magic", "Moldy"]
kinds = ["Gold", "Rubies", "Armor", "Booty", "Silver", "Plunder", "Rum", "Diamonds", "Notes", "Dagger", "Eye", "Heart"]

pirates.map do |p|
  3.times do
    p.treasures << Treasure.new(name: "#{p.name}'s #{statuses.sample} #{kinds.sample}", value: (100..10000000).to_a.sample, lat: (-90..90).to_a.sample + rand, lon: (-180..180).to_a.sample + rand)
  end
  p.save
end

actions = ["Find", "Beware", "Seek", "Encounter", "Hunt", "Explore", "Examine", "Pursue", "Heed", "Shun"]
items = ["Map", "Chest", "Trap", "Clue", "What You Seek", "Fountain"]
possessors = ["Monkey", "Sphinx", "Shark", "Mummy", "Dead Man", "Pirate", "Parrot", "Governor", "Professor", "Queen"]
locations = ["Jaw", "Sands", "Tomb", "Mansion", "Castle", "Cave", "Island"]

Treasure.all.each do |t|
  (1..8).to_a.sample.times do |x|
    t.clues << Clue.new(message: "#{actions.sample} the #{items.sample} in the #{possessors.sample}'s #{locations.sample}", lat: (-90..90).to_a.sample + rand, lon: (-180..180).to_a.sample + rand)
  end
  t.save
end
