class ResidualEditsFromShiftToContentOverSongs < ActiveRecord::Migration[6.1]
  def change
    rename_column :playlist_content, :song_id, :content_id
    remove_index :content, [:category_id]
  end
end
