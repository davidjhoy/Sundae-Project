class CreateFlavors < ActiveRecord::Migration[6.1]
  def change
    create_table :flavors do |t|
      t.string :name
      t.integer :price
      t.string :description
      t.boolean :has_dairy
      #find out boolean naming conventions on migration tables
    end
  end
end
