# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Department.destroy_all


management = Department.create!(

    title:              'Management',
    employee_count:     1,
    budget:             0,
    income:             0,
    productivity:       100,

)

records = Department.create!(

    title:              'Records',
    employee_count:     1,
    budget:             100_000,
    income:             500_000,
    productivity:       50,

)

production = Department.create!(

    title:              'Production',
    employee_count:     1,
    budget:             10_000_000_000,
    income:             1,
    productivity:       100,

)

puts "Done! Created #{ Department.count } employees."
puts Department.pluck( :title ).join(', ')


# ----------------------------------------------------------------- #


Employee.destroy_all

Employee.create!(

    name:                  'Xan Lyppiatt', 
    image_url:             'na.png', 
    dob:                   '1976-10-04',
    address:               '2 Mayfair Av, London',    
    gender:                'm',
    start_date:            '2021-06-12',
    contract:               0,
    full_time:              0,
    months_employed:        13,
    sick_days_accrued:      11,
    sick_days_taken:        11,
    leave_accrued_hours:    494,
    leave_taken_hours:      494,
    end_date:               nil,
    department_id:          management.id

)

Employee.create!(

    name:                  'Offred',                
    image_url:             'offred.webp',    
    dob:                   '1989-10-04',             
    address:               '5 Gilead st, Cambridge',    
    gender:                'f',                         
    start_date:            '2005-06-12',            
    contract:               0, 
    full_time:              1, 
    months_employed:        205, 
    sick_days_accrued:      203,
    sick_days_taken:        0, 
    leave_accrued_hours:    2584, 
    leave_taken_hours:      0, 
    end_date:               nil,
    department_id:          production.id 

    
)

Employee.create!(

    name:                  'Winston Smith',            
    image_url:             'winston.webp',       
    dob:                   '1945-10-04',                 
    address:               '24 Oxford Street, Cambridge',   
    gender:                'm',                              start_date:            '1962-03-20',              
    contract:               0,
    full_time:              1,
    months_employed:        725,
    sick_days_accrued:      719,
    sick_days_taken:        0,
    leave_accrued_hours:    259200,
    leave_taken_hours:      0,
    end_date:               nil,
    department_id:          records.id

)

puts "Done! Created #{ Employee.count } employees."
puts Employee.pluck( :name ).join(', ')


