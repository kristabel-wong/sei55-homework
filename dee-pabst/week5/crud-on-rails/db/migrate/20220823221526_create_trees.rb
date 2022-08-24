class CreateTrees < ActiveRecord::Migration[5.2]
  def change
    create_table :trees do |t|

      t.string  :common_name
      t.string  :botanical_name
      t.text    :key_id_features
      t.text    :distribution
      t.text    :image_url      
      
    end # create_table
  end #change
end #CreateTrees class
