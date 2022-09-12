class CreatePlants < ActiveRecord::Migration[5.2]
  def change
    create_table :plants do |t|
      t.string :name
      t.text :image_url
      t.string :sun_exposure
      t.string :native_area
      t.integer :mature_size

      t.timestamps
    end
  end
end
