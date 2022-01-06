class EditSongs < ActiveRecord::Migration[6.1]
  def change
    add_column :songs, :streams, :integer, default: 0, null: false
    add_index :songs, :streams
  end
end
