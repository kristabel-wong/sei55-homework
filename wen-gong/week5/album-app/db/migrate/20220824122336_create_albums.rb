class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.text :name
      t.string :released
      t.text :genre
      t.string :length
      t.text :image

      t.timestamps
    end
  end
end
