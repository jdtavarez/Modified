class ChangeUsersDefaults < ActiveRecord::Migration[6.1]
  def change
    change_column_default(:users, :gender, nil)
    change_column_default(:users, :birthday, nil)
  end
end
