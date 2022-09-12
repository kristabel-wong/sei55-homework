class CreateDepartments < ActiveRecord::Migration[5.2]
  def change
    create_table :departments do |t|
      t.string :title
      t.integer :employee_count
      t.integer :budget
      t.integer :income
      t.integer :productivity

      t.timestamps
    end
  end
end
