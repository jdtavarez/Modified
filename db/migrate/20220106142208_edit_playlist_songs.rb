class EditPlaylistSongs < ActiveRecord::Migration[6.1]
  def change
    add_column :playlist_content, :position, :integer, null: false
    add_column :songs, :album_pos, :integer, null: false
  end
end
