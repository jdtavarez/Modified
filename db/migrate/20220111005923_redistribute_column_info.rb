class RedistributeColumnInfo < ActiveRecord::Migration[6.1]
  def change
    execute "UPDATE contents SET album_title = albums.title FROM albums WHERE contents.album_id = albums.id"
    execute "UPDATE contents SET artist_name = artists.username FROM artists WHERE contents.artist_id = artists.id"
    execute "UPDATE contents SET genre = categories.genre FROM categories WHERE contents.category_id = categories.id"
  end
end
