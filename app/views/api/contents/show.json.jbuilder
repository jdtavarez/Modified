json.set! :contents do
        json.set! @content.id do
            json.id @content.id
            json.title @content.title
            json.length @content.length
            json.media_url url_for(@content.media)
            json.position @content.album_pos
            json.genre @content.genre
            json.image_url url_for(@album.image)
        end
    end
end