class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.string :name
      t.float :height
      t.float :weight
      t.string :country
      t.date :dob
      t.string :photo

      t.timestamps
    end
  end
end
