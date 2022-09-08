class CreatePlanets < ActiveRecord::Migration[5.2]
  def change
    create_table :planets do |t|

      # Instead of SQL 
      #Create table planets (id INTEGER, name TEXT, ...)
      # creating table structure this prevents us from needing
      # to think about what the underlying DB system
      # even is i.e. it would be easy to switch from one DB
      # system to anoter if we need to

      # No need to create an 'id' column - its so essential
      # and ubiqutious that its always made from us automatically

      t.string :name  #a string-type column called 'name'
      t.text   :image_url #a longer text column for the image url
      t.float  :orbit  #a float for the orbit time
                        #(expressed as a fraction of earths orbit time this allows us to get a number with decimal points)
      t.float  :mass    #mass, as a proportion of earth's mass
      t.integer :moons  #number of moonds

      

    end  #Create_table

  end  #change

end #class CreatePlanets
