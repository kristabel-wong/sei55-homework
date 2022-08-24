class CreateTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|
      t.string :name
      t.integer :founded
      t.string :arena
      t.string :owner
      t.string :logo

      t.timestamps
    end
  end
end
