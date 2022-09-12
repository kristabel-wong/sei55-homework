class CreatePlants < ActiveRecord::Migration[5.2]
  def change
    create_table :plants do |t|

    t.string    :name          #t.string 'a line of text'
    t.text      :image_url     #t.text 'many paragraphs'
    t.string    :sun_exposure
    t.string    :native_area
    t.integer   :mature_size
    
    end
  end
end
