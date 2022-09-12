class AddBuyerIdToPlants < ActiveRecord::Migration[5.2]
  def change
    add_column :plants, :buyer_id, :integer
  end
end
