require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

require 'active_record'
# to intialise active_record and make connection to the db
ActiveRecord::Base.establish_connection(

    # the string must reflect the db type
    adapter: 'sqlite3', 
    # the string must reflect the db name
    database: 'database.db'

);
# ensure to close the connection after each request
after do 
    ActiveRecord::Base.connection.close
end

# create CLASSES to correctly show relationship 
# between the two data tables
class Employee < ActiveRecord::Base
    belongs_to :department
end
class Department < ActiveRecord::Base
    has_many :employees
end

# --------------------------------------------------------------- #
# ------------------------ Functions ---------------------------- #
# --------------------------------------------------------------- #

def order_name ( employee_id )              # corrects name order
    employee_name = Employee.find params[:id]
    employee_name = employee_name.name.split(' ').rotate(-1)

    if employee_name.length <= 1 
        return @employee_name = employee_name[0]
    else
        @employee_name = "#{employee_name[0]}, #{employee_name[1].chr}" 
    end # closes if/else

end # closes order_name()

  
# --------------------------------------------------------------- #
# --------------------------- Home ------------------------------ #
# --------------------------------------------------------------- #

get '/' do 
    erb :home
end # closes '/'

# --------------------------------------------------------------- #
# --------------------- Employee Related ------------------------ #
# --------------------------------------------------------------- #
 
get '/employee_list' do
    
    @all_employees = Employee.all 

    erb :employee_list

end # closes '/employee_list'
get '/employee_list/:id' do
    
    @employee = Employee.find params[:id]
    @ordered_name = order_name(params[:id])
    # @ordered_dob = order_date(:id)

    erb :employee

end # closes '/employee_list/:id'

get '/new_employee' do

    erb :employee_new

end # closes '/new_employee'

post '/employee_list' do
    Employee.create(

        name:               params[:name],
        image_url:          params[:dob],
        home_address:       params[:home_address],
        gender:             params[:gender],
        start_date:         params[:start_date],
        on_contract:        params[:on_contract],
        contract_length:    params[:contract_length],
        full_time:          params[:full_time],
        casual:             params[:casual],
        months_employed:    params[:months_employed],
        sick_days_accrued:  params[:sick_days_accrued],
        sick_days_taken:    params[:sick_days_taken],   
        leave_hrs_accrued:  params[:leave_hrs_accrued],
        leave_hrs_taken:    params[:leave_hrs_taken],
        end_date:           params[:end_date],
        department_id:      params[:department_id]

    )

    redirect '/employee_list'

end # create employee
get '/employee_list/:id/delete' do

    Employee.destroy params[:id]

    redirect '/employee_list'

end # destroy employee
get '/employee_list/:id/edit' do

    @employee = Employee.find params[:id]

    erb :employee_edit

end # update employee'


# --------------------------------------------------------------- #
# -------------------- Department Related ----------------------- #
# --------------------------------------------------------------- #

get '/department_list' do
    
    @all_departments = Department.all

    erb :department_list 

end # closes '/department_list'
get '/department_list/:id' do
    
    @department = Department.find params[:id]
    @employees = Employee.all 

    erb :department

end # closes '/department_list/:id'

get '/found_department' do
    
    erb :department_new

end # closes '/found_department'

post '/department_list' do
    
    Department.create(

        name:               params[:name],
        employee_count:     params[:employee_count],
        budget:             params[:budget],
        productivity:       params[:productivity],
        productivity:       params[:productivity]

    )

    redirect '/department_list'

end # create department
get '/department_list/:id/edit' do
    
    department = Department.find params[:id]
    
    erb :department_edit

end # update department
get '/department_list/:id/delete' do

    Department.destroy params[:id]

    redirect '/department_list'

end # destroy department

