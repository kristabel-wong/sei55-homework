class CreateMembers < ActiveRecord::Migration[5.2]
  def change
    create_table :members do |t|
      t.string :name
      t.string :phone
      t.text :avatar
      t.text :town

      t.timestamps
    end
  end
end
