@playlists.each do |playlist|
    json.set! playlist.id do
        json.id playlist.id
        json.title playlist.title
        json.description playlist.description    
    end
end