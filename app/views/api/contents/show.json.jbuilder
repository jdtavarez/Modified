json.set! :album do
    json.id @album.id
    json.title @album.title
    json.artist_name @album.artist.username
    json.artist_id @album.artist_id
    json.release_year @album.release_year
    json.url url_for(@album.image)
    # json.artist_avatar url_for(@album.artist.avatar)
end
if @contents
    json.set! :contents do
        @contents.each do |content|
            json.set! content.id do
                json.id content.id
                json.title content.title
                json.length content.length
                json.media_url url_for(content.media)
                json.position content.album_pos
                json.genre content.genre
            end
        end
    end
end