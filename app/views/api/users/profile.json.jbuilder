json.set! :user do
    json.id @user.id
    json.username @user.username
    json.image_url url_for(@user.avatar)
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