class EditsToCategorySongs < ActiveRecord::Migration[6.1]
  def change
    add_column :songs, :content_type, :string, null: false
    add_index :songs, [:content_type, :category_id]
    rename_table :songs, :content
    remove_column :categories, :content_type, :string
  end
end
