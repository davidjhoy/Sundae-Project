class CreateSundaes < ActiveRecord::Migration[6.1]
  def change
    create_table :sundaes do |t|
      t.string :name
      t.string :container
      t.string :topping
      t.integer :user_id
      t.integer :flavor_id
    end
  end
end
