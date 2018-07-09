# Seed data

puts "Creating some flights"
Flight.create(origin: 'America', destination: 'New York')
Flight.create(origin: 'Canada', destination: 'England')

puts Flight.all.map { |flight| flight.inspect }
