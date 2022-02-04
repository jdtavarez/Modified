json.set! :category do 
    json.id @category.id
    json.genre @category.genre
end
if @artists 
    json.set! :artists do 
        (0...@artists.length).each do |i|
            json.set! @artists[i].id do
                json.id @artists[i].id
                json.artist_name @artists[i].username
            end
        end
    end
end
if @albums 
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
end