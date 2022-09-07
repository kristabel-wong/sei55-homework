class CreatePlanets < ActiveRecord::Migration[5.2]
  
  def change
    
    create_table :planets do |t|
    

      t.string   :name
      t.text     :image_url
      t.float    :orbit

      t.float    :mass
      t.integer  :moons

    end
   
  end

end
