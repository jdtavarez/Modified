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


artist2 = Artist.create!(username: "Ewin")
artist3 = Artist.create!(username: "JOC")
artist4 = Artist.create!(username: "Mayo King")
artist5 = Artist.create!(username: "Tess")
artist6 = Artist.create!(username: "Da Birdy")
artist7 = Artist.create!(username: "Earther")
artist8 = Artist.create!(username: "Gourmand Coquin")
artist10 = Artist.create!(username: "Party Person")
artist11 = Artist.create!(username: "Sybil Jonas")

category1 = Category.create!(genre: "Electronic")
category2 = Category.create!(genre: "Includes Guitar")
category3 = Category.create!(genre: "Energy")
category4 = Category.create!(genre: "Spooky")
category5 = Category.create!(genre: "Smoo")
category6 = Category.create!(genre: "Birthday Muzak")

album1 = Album.create!(title: "Sketches", release_year: "2012", artist_id: artist3.id)

content1 = Content.create!(title: "Green", length: 61, artist_id: artist3.id, category_id: category1.id, album_pos: 1, streams: 10000, content_type: "music", album_id: album1.id, album_title: album1.title, artist_name: artist3.username, genre: category1.genre)

content2 = Content.create!(title: "Tech Pirate", length: 54, artist_id: artist3.id, category_id: category1.id, album_pos: 2, streams: 200, content_type: "music", album_id: album1.id, album_title: album1.title, artist_name: artist3.username, genre: category1.genre)

cover1 = URI.open('https://modified-seed-data.s3.amazonaws.com/artists/JOC/SKETCHES/SKETCHES_COVER.jpg')
song1 = URI.open('https://modified-seed-data.s3.amazonaws.com/artists/JOC/SKETCHES/GREEN.mp3')
song2 = URI.open('https://modified-seed-data.s3.amazonaws.com/artists/JOC/SKETCHES/TECH_PIRATE.mp3')

album1.image.attach(io: cover1, filename: "SKETCHES_COVER.jpg")
content1.media.attach(io: song1, filename: "GREEN.mp3")
content2.media.attach(io: song2, filename: "TECH_PIRATE.mp3")

album3 = Album.create!(title: "Game", release_year: "2014", artist_id: artist3.id)

content8 = Content.create!(title: "Atlantis", length: 96, artist_id: artist3.id, category_id: category1.id, album_pos: 1, streams: 2, content_type: "music", album_id: album3.id, album_title: album3.title, artist_name: artist3.username, genre: category1.genre)

content9 = Content.create!(title: "Intro", length: 80, artist_id: artist3.id, category_id: category1.id, album_pos: 2, streams: 5, content_type: "music", album_id: album3.id, album_title: album3.title, artist_name: artist3.username, genre: category1.genre)

content10 = Content.create!(title: "Chouce Garden", length: 185, artist_id: artist3.id, category_id: category1.id, album_pos: 3, streams: 6000, content_type: "music", album_id: album3.id, album_title: album3.title, artist_name: artist3.username, genre: category1.genre)

content11 = Content.create!(title: "Jester 1", length: 45, artist_id: artist3.id, category_id: category6.id, album_pos: 3, streams: 6040, content_type: "music", album_id: album3.id, album_title: album3.title, artist_name: artist3.username, genre: category6.genre)

content12 = Content.create!(title: "Jester 2", length: 68, artist_id: artist3.id, category_id: category6.id, album_pos: 3, streams: 6900, content_type: "music", album_id: album3.id, album_title: album3.title, artist_name: artist3.username, genre: category6.genre)


cover4 = URI.open('https://modified-seed-data.s3.amazonaws.com/artists/JOC/GAME/GAME_COVER.jpg')
song8 = URI.open('https://modified-seed-data.s3.amazonaws.com/artists/JOC/GAME/ATLANTIS.mp3')
song9 = URI.open('https://modified-seed-data.s3.amazonaws.com/artists/JOC/GAME/INTRO.mp3')
song10 = URI.open('https://modified-seed-data.s3.amazonaws.com/artists/JOC/GAME/CHOUCE_GARDEN.mp3')
song11 = URI.open('https://modified-seed-data.s3.amazonaws.com/artists/JOC/GAME/JESTER_1.mp3')
song12 = URI.open('https://modified-seed-data.s3.amazonaws.com/artists/JOC/GAME/JESTER_2.mp3')

album3.image.attach(io: cover4, filename: "GAME_COVER.jpg")
content8.media.attach(io: song8, filename: "ATLANTIS.mp3")
content9.media.attach(io: song9, filename: "INTRO.mp3")
content10.media.attach(io: song10, filename: "CHOUCE_GARDEN.mp3")
content11.media.attach(io: song11, filename: "JESTER_1.mp3")
content12.media.attach(io: song12, filename: "JESTER_2.mp3")

album2 = Album.create!(title: "Electronic Victory", release_year: "2016", artist_id: artist2.id)

content3 = Content.create!(title: "K", length: 76, artist_id: artist2.id, category_id: category1.id, album_pos: 1, streams: 100, content_type: "music", album_id: album2.id, album_title: album2.title, artist_name: artist2.username, genre: category1.genre)
content4 = Content.create!(title: "New One", length: 66, artist_id: artist2.id, category_id: category3.id, album_pos: 2, streams: 10020, content_type: "music", album_id: album2.id, album_title: album2.title, artist_name: artist2.username, genre: category3.genre)
content5 = Content.create!(title: "Old One", length: 45, artist_id: artist2.id, category_id: category3.id, album_pos: 3, streams: 400, content_type: "music", album_id: album2.id, album_title: album2.title, artist_name: artist2.username, genre: category3.genre)
content6 = Content.create!(title: "Project 27", length: 34, artist_id: artist2.id, category_id: category3.id, album_pos: 4, streams: 10, content_type: "music", album_id: album2.id, album_title: album2.title, artist_name: artist2.username, genre: category3.genre)
content7 = Content.create!(title: "Tunnel", length: 160, artist_id: artist2.id, category_id: category3.id, album_pos: 5, streams: 3, content_type: "music", album_id: album2.id, album_title: album2.title, artist_name: artist2.username, genre: category3.genre)

cover2 = URI.open('https://modified-seed-data.s3.amazonaws.com/artists/EWIN/TUNNEL_DUDE/TUNNEL_DUDE_COVER.jpeg')

song3 = URI.open('https://modified-seed-data.s3.amazonaws.com/artists/EWIN/TUNNEL_DUDE/K.mp3')
song4 = URI.open('https://modified-seed-data.s3.amazonaws.com/artists/EWIN/TUNNEL_DUDE/NEW_ONE.mp3')
song5 = URI.open('https://modified-seed-data.s3.amazonaws.com/artists/EWIN/TUNNEL_DUDE/OLD_ONE.mp3')
song6 = URI.open('https://modified-seed-data.s3.amazonaws.com/artists/EWIN/TUNNEL_DUDE/PROJECT_27.mp3')
song7 = URI.open('https://modified-seed-data.s3.amazonaws.com/artists/EWIN/TUNNEL_DUDE/TUNNEL.mp3')

album2.image.attach(io: cover2, filename: "TUNNEL_DUDE_COVER.jpg" )
content3.media.attach(io: song3, filename: "K.mp3")
content4.media.attach(io: song4, filename: "NEW_ONE.mp3")
content5.media.attach(io: song5, filename: "OLD_ONE.mp3")
content6.media.attach(io: song6, filename: "PROJECT_27.mp3")
content7.media.attach(io: song7, filename: "TUNNEL.mp3")

artist1 = Artist.create!(username: "Champagne Papito")

album4 = Album.create!(title: "MESA KURR", release_year: "2009", artist_id: artist1.id)

content13 = Content.create!(title: "MESA KURR", length: 245, artist_id: artist1.id, category_id: category4.id, album_pos: 1, streams: 1, content_type: "music", album_id: album4.id, album_title: album4.title, artist_name: artist1.username, genre: category4.genre)

cover5 = URI.open('https://modified-seed-data.s3.amazonaws.com/artists/CHAMPAGNE_PAPITO/MESA_KUUR/MESA_KURR_COVER.png')
song13 = URI.open('https://modified-seed-data.s3.amazonaws.com/artists/CHAMPAGNE_PAPITO/MESA_KUUR/MESA_KURR.mp3')

album4.image.attach(io: cover5, filename: "MESA_KURR_COVER.png" )
content13.media.attach(io: song13, filename: "MESA_KURR.mp3")

album5 = Album.create!(title: "N65", release_year: "2010", artist_id: artist1.id)

content14 = Content.create!(title: "N65", length: 197, artist_id: artist1.id, category_id: category4.id, album_pos: 1, streams: 2, content_type: "music", album_id: album5.id, album_title: album5.title, artist_name: artist1.username, genre: category4.genre)

cover6 = URI.open('https://modified-seed-data.s3.amazonaws.com/artists/CHAMPAGNE_PAPITO/N65/N65_COVER.jpg')
song14 = URI.open('https://modified-seed-data.s3.amazonaws.com/artists/CHAMPAGNE_PAPITO/N65/N65.mp3')

album5.image.attach(io: cover6, filename: "N65_COVER.jpg" )
content14.media.attach(io: song14, filename: "N65.mp3")

artist9 = Artist.create!(username: "AH")

album6 = Album.create!(title: "AH", release_year: "2013", artist_id: artist9.id)

content15 = Content.create!(title: "it's not that dee", length: 151, artist_id: artist9.id, category_id: category2.id, album_pos: 1, streams: 100, content_type: "music", album_id: album6.id, album_title: album6.title, artist_name: artist9.username, genre: category2.genre)
content16 = Content.create!(title: "overnigh", length: 173, artist_id: artist9.id, category_id: category2.id, album_pos: 2, streams: 10020, content_type: "music", album_id: album6.id, album_title: album6.title, artist_name: artist9.username, genre: category2.genre)
content17 = Content.create!(title: "waiting roo", length: 85, artist_id: artist9.id, category_id: category2.id, album_pos: 3, streams: 400, content_type: "music", album_id: album6.id, album_title: album6.title, artist_name: artist9.username, genre: category2.genre)
content18 = Content.create!(title: "201", length: 195, artist_id: artist9.id, category_id: category2.id, album_pos: 4, streams: 10, content_type: "music", album_id: album6.id, album_title: album6.title, artist_name: artist9.username, genre: category2.genre)
content19 = Content.create!(title: "episode 4", length: 252, artist_id: artist9.id, category_id: category2.id, album_pos: 5, streams: 3, content_type: "music", album_id: album6.id, album_title: album6.title, artist_name: artist9.username, genre: category2.genre)
content20 = Content.create!(title: "sdq (red eye)", length: 198, artist_id: artist9.id, category_id: category2.id, album_pos: 6, streams: 3, content_type: "music", album_id: album6.id, album_title: album6.title, artist_name: artist9.username, genre: category2.genre)

cover7 = URI.open('https://modified-seed-data.s3.amazonaws.com/artists/AH/AH/AH_COVER.jpg')
song15 = URI.open("https://modified-seed-data.s3.amazonaws.com/artists/AH/AH/01_IT'S_NOT_THAT_DEE.mp3")
song16 = URI.open("https://modified-seed-data.s3.amazonaws.com/artists/AH/AH/03_OVERNIGH.mp3")
song17 = URI.open("https://modified-seed-data.s3.amazonaws.com/artists/AH/AH/04_WAITING_ROO.mp3")
song18 = URI.open('https://modified-seed-data.s3.amazonaws.com/artists/AH/AH/05_201.mp3')
song19 = URI.open('https://modified-seed-data.s3.amazonaws.com/artists/AH/AH/06_EPISODE_4.mp3')
song20 = URI.open('https://modified-seed-data.s3.amazonaws.com/artists/AH/AH/07_SDQ_(RED_EYE).mp3')

album6.image.attach(io: cover7, filename: "AH_COVER.jpg" )
content15.media.attach(io: song15, filename: "01_IT'S_NOT_THAT_DEE.mp3")
content16.media.attach(io: song16, filename: "03_OVERNIGH.mp3")
content17.media.attach(io: song17, filename: "04_WAITING_ROO.mp3")
content18.media.attach(io: song18, filename: "05_201.mp3")
content19.media.attach(io: song19, filename: "06_EPISODE_4.mp3")
content20.media.attach(io: song20, filename: "07_SDQ_(RED_EYE).mp3'")

album7 = Album.create!(title: "Duck Fat", release_year: "2013", artist_id: artist9.id)

content21 = Content.create!(title: "Duck Fat", length: 43, artist_id: artist9.id, category_id: category2.id, album_pos: 1, streams: 100, content_type: "music", album_id: album7.id, album_title: album7.title, artist_name: artist9.username, genre: category2.genre)

cover8 = URI.open('https://modified-seed-data.s3.amazonaws.com/artists/AH/DUCK_FAT/DUCK_FAT_COVER.jpg')
song21 = URI.open('https://modified-seed-data.s3.amazonaws.com/artists/AH/DUCK_FAT/DUCK_FAT.mp3')
album7.image.attach(io: cover8, filename: "DUCK_FAT_COVER.jpg" )
content21.media.attach(io: song21, filename: "DUCK_FAT.mp3")



playlist1 = Playlist.create!(title: "My Playlist 1", creator_id: user1.id, creator_type: "User")

cover3 = URI.open('https://modified-seed-data.s3.amazonaws.com/empty_playlist.png')

playlist1.image.attach(io: cover3, filename: "empty_playlist.png")

(1..21).each { |e| PlaylistContent.create!(playlist_id: 1, content_id: e, position: e) }