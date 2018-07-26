# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

teams = Team.create([{name: 'Monstars'}, {name: 'Toon Squad'}])

Player.create(name: "Pound", number: 1, team: teams.first)
Player.create(name: "Bang", number: 2, team: teams.first)
Player.create(name: "Bupkus", number: 3, team: teams.first)
Player.create(name: "Blanko", number: 4, team: teams.first)
Player.create(name: "Nawt", number: 5, team: teams.first)


Player.create(name: "Michael Jordan", number: 23, team: teams.last)
Player.create(name: "Bugs Bunny", number: 1, team: teams.last)
Player.create(name: "Daffy Duck", number: 2, team: teams.last)
Player.create(name: "Lola Bunny", number: 10, team: teams.last)
Player.create(name: "Taz", number: 4, team: teams.last)
