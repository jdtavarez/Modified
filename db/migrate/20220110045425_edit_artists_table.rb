class EditArtistsTable < ActiveRecord::Migration[6.1]
  def change
    rename_column :artists, :artist_name, :username
  end
end
