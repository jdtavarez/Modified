json.set! :playlist do
    json.id @playlist.id
    json.title @playlist.title
    json.description @playlist.description
    json.creator_name @playlist.creator.username
    json.creator_id @playlist.creator_id
    json.url url_for(@playlist.image)
end
if @playlist_contents
    json.set! :contents do
        (0...@playlist_contents.length).each do |i|
            content = @playlist_contents[i].content
            position = @playlist_contents[i].position
            date_added = @playlist.contents[i].updated_at
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
                json.position position
                json.date_added date_added
                json.genre content.genre
            end
        end
    end
end