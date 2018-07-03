require 'sqlite3'
require 'pry'


db = SQLite3::Database.new('chinook.db')

command = "SELECT artists.name, albums.title, COUNT(tracks.trackId)
FROM artists
JOIN albums
ON artists.artistid = albums.artistid
JOIN tracks
ON albums.albumid = tracks.albumid
GROUP BY albums.albumId;"

db.execute(command)

binding.pry
puts "hi"
