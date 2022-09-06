class AddZooIdToAnimals < ActiveRecord::Migration[5.2]

  def change
    add_column :animals, :zoo_id, :integer
  end
  
end
