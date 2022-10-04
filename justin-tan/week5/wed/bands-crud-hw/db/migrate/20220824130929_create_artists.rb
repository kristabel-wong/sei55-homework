class CreateArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :artists do |t|
      t.string :name
      t.integer :age
      t.string :nationality
      t.text :hobbies
      t.text :bio
      t.text :image

      t.timestamps
    end
  end
end
