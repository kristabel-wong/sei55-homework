class CreateDirectors < ActiveRecord::Migration[5.2]
  def change
    create_table :directors do |t|
      t.string :name
      t.string :nationality
      t.date :dob
      t.integer :award
      t.text :image

      t.timestamps
    end
  end
end
