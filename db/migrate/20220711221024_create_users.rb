class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :user_name
      t.string :favorite_flavor
      t.integer :age_of_account
    end
  end
end
