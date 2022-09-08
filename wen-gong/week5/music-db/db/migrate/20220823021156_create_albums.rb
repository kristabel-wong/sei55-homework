class CreateAlbums < ActiveRecord::Migration[5.2]
  
  def change
    
    create_table :albums do |t|
    

      t.string   :name
      t.text     :image_url
      t.text    :released

      t.text    :genre
      t.integer  :length

    end
   
  end

end
