class CreateBands < ActiveRecord::Migration[5.2]
  def change
    create_table :bands do |t|
      t.string :name
      t.integer :year
      t.string :country
      t.text :songs
      t.string :genre
      t.integer :album_number
      t.text :description
      t.text :image

      t.timestamps
    end
  end
end
