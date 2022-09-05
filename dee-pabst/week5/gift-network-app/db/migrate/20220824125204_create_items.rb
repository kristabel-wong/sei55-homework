class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :summary
      t.text :description
      t.string :condition
      t.text :image
      t.string :category

      t.timestamps
    end
  end
end
