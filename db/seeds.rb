# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or create!d alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create!([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create!(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Artist.destroy_all
Category.destroy_all
Album.destroy_all
Content.destroy_all
Playlist.destroy_all
PlaylistContent.destroy_all

user1 = User.new(username: "demouser", email: "demouser@mail.com", gender: "Non-binary", birthday: "01/01/1901")
user1.password = "password"
user1.save!

artist1 = Artist.create!(username: "Champagne Papito")
artist2 = Artist.create!(username: "Ewin")
artist3 = Artist.create!(username: "JOC")
artist4 = Artist.create!(username: "Mayo King")
artist5 = Artist.create!(username: "Tess")

category1 = Category.create!(genre: "Electronic")

album1 = Album.create!(title: "Sketches", release_year: "2012", artist_id: artist3.id)

content1 = Content.create!(title: "Green", length: 61, artist_id: artist3.id, category_id: category1.id, album_pos: 1, streams: 10000, content_type: "music", album_id: album1.id)
content2 = Content.create!(title: "Tech Pirate", length: 54, artist_id: artist3.id, category_id: category1.id, album_pos: 2, streams: 200, content_type: "music", album_id: album1.id)

cover1 = URI.open('https://modified-seed-data.s3.amazonaws.com/artists/JOC/SKETCHES/SKETCHES_COVER.jpg')
song1 = URI.open('https://modified-seed-data.s3.amazonaws.com/artists/JOC/SKETCHES/GREEN.mp3')
song2 = URI.open('https://modified-seed-data.s3.amazonaws.com/artists/JOC/SKETCHES/TECH_PIRATE.mp3')

album1.image.attach(io: cover1, filename: "SKETCHES_COVER.jpg")
# content1.media.attach(io: cover1, filename: "SKETCHES_COVER.jpg")
# content2.media.attach(io: cover1, filename: "SKETCHES_COVER.jpg")
content1.media.attach(io: song1, filename: "GREEN.mp3")
content2.media.attach(io: song2, filename: "TECH_PIRATE.mp3")

album2 = Album.create!(title: "Electronic Victory", release_year: "2016", artist_id: artist2.id)

content3 = Content.create!(title: "K", length: 76, artist_id: artist2.id, category_id: category1.id, album_pos: 1, streams: 100, content_type: "music", album_id: album2.id)
content4 = Content.create!(title: "New One", length: 66, artist_id: artist2.id, category_id: category1.id, album_pos: 2, streams: 10020, content_type: "music", album_id: album2.id)
content5 = Content.create!(title: "Old One", length: 45, artist_id: artist2.id, category_id: category1.id, album_pos: 3, streams: 400, content_type: "music", album_id: album2.id)
content6 = Content.create!(title: "Project 27", length: 34, artist_id: artist2.id, category_id: category1.id, album_pos: 4, streams: 10, content_type: "music", album_id: album2.id)
content7 = Content.create!(title: "Tunnel", length: 160, artist_id: artist2.id, category_id: category1.id, album_pos: 5, streams: 3, content_type: "music", album_id: album2.id)

cover2 = URI.open('https://modified-seed-data.s3.amazonaws.com/artists/EWIN/TUNNEL_DUDE/TUNNEL_DUDE_COVER.jpeg')

song3 = URI.open('https://modified-seed-data.s3.amazonaws.com/artists/EWIN/TUNNEL_DUDE/K.mp3')
song4 = URI.open('https://modified-seed-data.s3.amazonaws.com/artists/EWIN/TUNNEL_DUDE/NEW_ONE.mp3')
song5 = URI.open('https://modified-seed-data.s3.amazonaws.com/artists/EWIN/TUNNEL_DUDE/OLD_ONE.mp3')
song6 = URI.open('https://modified-seed-data.s3.amazonaws.com/artists/EWIN/TUNNEL_DUDE/PROJECT_27.mp3')
song7 = URI.open('https://modified-seed-data.s3.amazonaws.com/artists/EWIN/TUNNEL_DUDE/TUNNEL.mp3')

album2.image.attach(io: cover2, filename: "TUNNEL_DUDE_COVER.jpg" )
# content3.media.attach(io: cover2, filename: "TUNNEL_DUDE_COVER.jpg" )
# content4.media.attach(io: cover2, filename: "TUNNEL_DUDE_COVER.jpg" )
# content5.media.attach(io: cover2, filename: "TUNNEL_DUDE_COVER.jpg" )
# content6.media.attach(io: cover2, filename: "TUNNEL_DUDE_COVER.jpg" )
# content7.media.attach(io: cover2, filename: "TUNNEL_DUDE_COVER.jpg" )
content3.media.attach(io: song3, filename: "K.mp3")
content4.media.attach(io: song4, filename: "NEW_ONE.mp3")
content5.media.attach(io: song5, filename: "OLD_ONE.mp3")
content6.media.attach(io: song6, filename: "PROJECT_27.mp3")
content7.media.attach(io: song7, filename: "TUNNEL.mp3")

playlist1 = Playlist.create!(title: "My Playlist 1", creator_id: user1.id, creator_type: "User")

cover3 = URI.open('https://modified-seed-data.s3.amazonaws.com/empty_playlist.png')

playlist1.image.attach(io: cover3, filename: "empty_playlist.png")

(1..7).each { |e| PlaylistContent.create!(playlist_id: 1, content_id: e, position: e) }
