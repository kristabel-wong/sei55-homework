class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
    
    t.string :name
    t.string :sex
    t.string :dob
    t.string :country
    t.integer :grand_slam 
    t.integer :highest_ranking 
    t.text :image_url 

    end
  end
end
