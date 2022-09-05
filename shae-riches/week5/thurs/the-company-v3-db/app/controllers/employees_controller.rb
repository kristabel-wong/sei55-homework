class EmployeesController < ApplicationController
  
  def new
    @employee = Employee.new    
  end

  def create
    Employee.create employee_params

    redirect_to employees_path
  end

  def index
    @employees = Employee.all
  end

  def show
    @employee = Employee.find params[:id]
  end

  def edit
    @employee = Employee.find params[:id]
  end

  def update
    employee = Employee.find params[:id]
    employee.update employee_params

    redirect_to employee_path(employee.id)
  end

  def destroy
    Employee.destroy params[:id]
    redirect_to employees_path
  end

  # ----------------------- PRVATE ----------------------- #

  def employee_params

      params.require(:employee).permit( :name, :image_url, :dob, :address, :gender, :start_date, :contract, :full_time, :months_employed, :sick_days_accrued, :sick_days_take, :leave_accrued_hours, :leave_taken_hours, :end_date, :department_id )
    
  end # closes employee_params



end
