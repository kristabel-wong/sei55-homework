class CreateZoos < ActiveRecord::Migration[5.2]

  def change

    create_table :zoos do |t|
      t.text :name
      t.string :country
      t.text :image

      t.timestamps
    end

  end
  
end
