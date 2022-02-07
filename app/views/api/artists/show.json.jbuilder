json.set! :artist do
    json.id @artist.id
    json.artist_name @artist.username
end
json.set! :contents do
    @contents.each do |content|
        json.set! content.id do 
            json.id content.id
            json.title content.title
            json.length content.length
            json.album_id content.album_id
            json.album_title content.album_title
            json.artist_id content.artist_id
            json.artist_name content.artist_name
            json.media_url url_for(content.media)
            json.image_url url_for(content.album.image)
            json.streams content.streams
        end
    end
end
json.set! :albums do
    (0...@albums.length).each do |i|
        json.set! @albums[i].id do
            json.title @albums[i].title
            json.artist_id @albums[i].artist_id
            json.image_url url_for(@albums[i].image)
            json.id @albums[i].id
            json.release_year @albums[i].release_year
        end 
    end
end   
json.set! :playlists do
    @playlists.each do |playlist|
        json.set! playlist.title do
            json.id playlist.id
            json.title playlist.title
            json.image_url url_for(playlist.image)
            creator = playlist.creator
            json.creator_name creator.username
            json.creator_id creator.id
        end
    end
end
json.set! :featured_playlists do
    @featured_playlists.each do |playlist|
        json.set! playlist.title do
            json.id playlist.id
            json.title playlist.title
            json.image_url url_for(playlist.image)
            creator = playlist.creator
            json.creator_name creator.username
            json.creator_id creator.id
        end
    end
end
json.set! :albums do
    (0...@albums.length).each do |i|
        json.set! @albums[i].id do
            json.title @albums[i].title
            json.artist_id @albums[i].artist_id
            json.image_url url_for(@albums[i].image)
            json.id @albums[i].id
            json.release_year @albums[i].release_year
        end 
    end
end   
json.set! :playlists do
    @playlists.each do |playlist|
        json.set! playlist.title do
            json.id playlist.id
            json.title playlist.title
            json.image_url url_for(playlist.image)
            creator = playlist.creator
            json.creator_name creator.username
            json.creator_id creator.id
        end
    end
end
json.set! :featured_playlists do
    @featured_playlists.each do |playlist|
        json.set! playlist.title do
            json.id playlist.id
            json.title playlist.title
            json.image_url url_for(playlist.image)
            creator = playlist.creator
            json.creator_name creator.username
            json.creator_id creator.id
        end
    end
end