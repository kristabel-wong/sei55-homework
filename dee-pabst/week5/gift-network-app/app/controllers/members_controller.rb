class MembersController < ApplicationController

  def home
  end
  
  def new
    @member = Member.new
  end

  def create
    Member.create member_params
    redirect_to members_path
  end

  def index
    @members = Member.all
  end

  def show
    @member = Member.find params[:id]
  end

  def edit
    @member = Member.find params[:id]
  end

  def update
    member = Member.find params[:id]
    member.update member_params

    redirect_to  member_path(member.id)
  end

  def destroy
    Member.destroy params[:id]
    redirect_to members_path
  end

  private ###############

  # filters submitted params (preventing attacks via form fields)
  # GOTCHA! - update this filter with new fields
  def member_params
    params.require(:member).permit(:name,:phone,:avatar,:town)
  end # member_params
  
end # class MembersController
