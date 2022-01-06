class NewTables < ActiveRecord::Migration[6.1]
  def change
    create_table :artists do |t|
      t.string :artist_name, null: false
      t.string :bio
      t.timestamps
    end
    create_table :albums do |t|
      t.string :title, null: false
      t.index [:title]
      t.integer :release_year, null: false
      t.integer :artist_id, null: false
      t.index [:artist_id]
      t.timestamps
    end
    create_table :songs do |t|
      t.string :title, null: false
      t.index [:title]
      t.integer :length, null: false
      t.integer :artist_id, null: false
      t.integer :album_id, null: false
      t.index [:artist_id, :album_id]
      t.integer :category_id, null: false
      t.index [:category_id]
      t.timestamps
    end
    create_table :playlists do |t|
      t.string :title, null: false
      t.index [:title]
      t.string :description
      t.integer :creator_id, null: false
      t.string :creator_type, null: false
      t.index [:creator_id, :creator_type]
      t.timestamps
    end
    create_table :categories do |t|
      t.string :content_type, null: false
      t.string :genre, null: false
      t.index [:content_type]
      t.index [:genre], unique: true
    end
  end
end
