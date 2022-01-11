@playlists.each do |playlist|
    json.set! playlist.id do
        json.id playlist.id
        json.title playlist.title
        json.description playlist.description
        json.url url_for(playlist.image)
        json.creator_id playlist.creator_id
        creator = playlist.creator
        json.creator_name creator.username
        json.creator_type playlist.creator_type
    end
end