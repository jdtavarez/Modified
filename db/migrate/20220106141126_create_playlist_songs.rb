class CreatePlaylistSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :playlist_content do |t|
      t.integer :playlist_id, null: false
      t.integer :song_id, null: false
      t.index [:playlist_id, :song_id]
      t.timestamps
    end
  end
end
