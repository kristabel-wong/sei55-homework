class DepartmentsController < ApplicationController

  def new
    @department = Department.new    
  end

  def create
    Department.create department_params
  end

  def index
    @departments = Department.all
  end

  def show
    @department = Department.find params[:id]
  end

  def edit
    @department = Department.find params[:id]
  end

  def update
    department = Department.find params[:id]
    department.update department_params

    redirect_to department_path(department.id)
  end

  def destroy
    Department.destroy params[:id]
    redirect_to departments_path
  end

  # ----------------------- PRVATE ----------------------- #

  def department_params
    
    params.require(:department).permit(:title, :employee_count, :budget, :income, :productivity)

  end

end
