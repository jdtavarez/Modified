json.set! :category do 
    json.id @category.id
    json.genre @category.genre
end
if @artists 
    json.set! :artists do 
        (0...@artists.length).each do |i|
            json.image_url @artists[i].avatar
            json.id @artists[i].id
            json.artist_name @artists[i].username
        end
    end
end
if @albums 
    json.set! :albums do
        (0...@albums.length).each do |i|
            json.image_url @albums[i].image
            json.id @albums[i].id
            json.artist_name @albums[i].username
            json.release_year @albums[i].release_year
        end
    end
end