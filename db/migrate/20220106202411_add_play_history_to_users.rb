class AddPlayHistoryToUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :streams do |t|
      t.integer :user_id, null: false
      t.integer :content_id, null: false
      t.index [:user_id, :content_id]
      t.timestamps
    end
  end
end
