class WorksController < ApplicationController
  def new
    @work = Work.new
  end

  def create
    Work.create work_params #or create!
    redirect_to works_path #redirect to index
  end

  def index
    @works = Work.all
  end

  def show
    @work = Work.find params[:id]
  end

  def edit
    @work = Work.find params[:id]
  end

  def update
    work = Work.find params[:id]
    work.update work_params
    
    redirect_to work_path(work.id)
  end

  def destroy
    Work.destroy params[:id]

    redirect_to works_path 
  end

  private
  def work_params
    params.require(:work).permit(:title, :year, :medium, :style, :image, :artist_id)
  end


end
