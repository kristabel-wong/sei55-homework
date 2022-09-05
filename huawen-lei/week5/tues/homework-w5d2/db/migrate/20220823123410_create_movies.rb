class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|

      t.string :name
      t.integer :release_year
      t.text :director
      t.text :starring
      t.float :running_time
      t.text :image_url
      

    end # create_table

  end # change

end # class CreateMovies
