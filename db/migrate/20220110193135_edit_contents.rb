class EditContents < ActiveRecord::Migration[6.1]
  def change
    add_column :contents, :album_title, :string
    execute "UPDATE contents SET album_title = albums.title FROM albums WHERE contents.album_id = albums.id"
    add_column :contents, :artist_name, :string
    execute "UPDATE contents SET artist_name = artists.username FROM artists WHERE contents.artist_id = artists.id"
    add_column :contents, :genre, :string
    execute "UPDATE contents SET genre = categories.genre FROM categories WHERE contents.category_id = categories.id"
  end
end
