class CreateCountries < ActiveRecord::Migration[5.2]
  def change
    create_table :countries do |t|
      t.string :name
      t.string :location
      t.string :language
      t.float  :population
      t.boolean :vist
      t.text    :image_url      

    end
  end
end
