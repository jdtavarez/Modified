class EditPlaylistContentname < ActiveRecord::Migration[6.1]
  def change
    rename_table :playlist_content, :playlist_contents
  end
end
