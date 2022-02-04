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
        end
    end
end
json.set! :artists do
    @artists.each do |artist|
        json.set! artist.id do 
            json.id artist.id
            json.artist_name artist.username
            json.image_url artist.avatar
        end
    end
end
json.set! :albums do
    @albums.each do |album|
        json.set! album.id do
            json.id album.id
            json.title album.title
            json.release_year album.release_year
            json.image_url album.image
        end
    end
end
json.set! :playlists do
    @playlists.each do |playlist|
        json.set! playlist.id do
            json.id playlist.id
            json.title playlist.title
            json.url url_for(playlist.image)
            creator = playlist.creator
            json.creator_name creator.username
        end
    end
end

