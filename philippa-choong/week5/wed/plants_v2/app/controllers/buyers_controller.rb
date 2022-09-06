class BuyersController < ApplicationController
  #CREATE
  def new
    @buyer = Buyer.new
  end

  def create
    Buyer.create buyer_params
    redirect_to buyers_path
  end


  #READ
  def index
    @buyers = Buyer.all
  end

  def show
    @buyer = Buyer.find params[:id]
  end

  #UDPATE
  def edit
    @buyer = Buyer.find params[:id]
  end

  def update
    buyer = Buyer.find params[:id]
    buyer.update buyer_params

    redirect_to buyer_path(buyer.id)

  end

  #DESTROY
  def destroy
    Buyer.destroy params[:id]

    redirect_to buyers_path #index

  end

  private

  def buyer_params
    params.require(:buyer).permit(:name, :image, :email)
  end

end
