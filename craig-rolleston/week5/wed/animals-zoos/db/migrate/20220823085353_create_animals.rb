class CreateAnimals < ActiveRecord::Migration[5.2]

  def change

    create_table :animals do |t|

      t.string  :name
      t.text    :image_url
      t.string  :species
      t.text    :region
      t.integer :life_span

    end #create table

  end #change

end #class CreateAnimals
