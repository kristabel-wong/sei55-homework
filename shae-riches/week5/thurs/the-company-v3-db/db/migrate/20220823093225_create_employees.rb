class CreateEmployees < ActiveRecord::Migration[5.2]

  def change
    create_table :employees do |t|

      t.string    :name
      t.text      :image_url
      t.date      :dob
      t.string    :address
      t.string    :gender
      t.date      :start_date
      t.boolean   :contract
      t.boolean   :full_time
      t.integer   :months_employed
      t.integer   :sick_days_accrued
      t.integer   :sick_days_taken
      t.integer   :leave_accrued_hours
      t.integer   :leave_taken_hours
      t.date      :end_date

    end

  end

end 
