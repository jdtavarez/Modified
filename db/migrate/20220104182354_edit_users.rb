class EditUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :gender, :string, null: false, default: "Non-binary"
    add_column :users, :birthday, :date, null: false, default: "1/1/1991"
  end
end
