class CreateTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|
      t.string  :name
      t.text    :image_url
      t.integer :founded_year
      t.string  :city
      t.string  :arena
      t.string  :owner
    end
  end
end
