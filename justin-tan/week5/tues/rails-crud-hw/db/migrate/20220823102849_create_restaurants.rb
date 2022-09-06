class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|

      t.string :name
      t.string :chef
      t.string :location
      t.string :cuisine
      t.integer :year
      t.float :price_range
      t.text :description
      t.text :restaurant_img
      t.string :dish
      t.text :dish_img

    end
  end
end
