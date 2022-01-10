json.playlist_info do 
    json.set! :playlist do
        json.id @playlist.id
        json.title @playlist.title
        json.description @playlist.description
        json.url url_for(@playlist.image)
    end
    json.set! :contents do
        @contents.each do |content|
            json.set! content.id do
                json.id content.id
                json.title content.title
                json.length content.length
                json.url url_for(content.media)
            end
        end
    end
    json.set! :position do 
        @order.each do |position|
            json.set! position.content_id do
                json.content_id position.content_id
                json.positon position.position
            end
        end
    end
end