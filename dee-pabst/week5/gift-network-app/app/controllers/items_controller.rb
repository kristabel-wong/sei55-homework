class ItemsController < ApplicationController
  def new
    @item = Item.new
  end

  def create
    Item.create item_params
    redirect_to items_path
  end

  def index
    @items = Item.all
  end

  def show
    @item = Item.find params[:id]
  end

  def edit
    @item = Item.find params[:id]
  end

  def update
    item = Item.find params[:id]
    item.update item_params

    redirect_to item_path(item.id)
  end

  def destroy
    Item.destroy params[:id]
    redirect_to items_path
  end

  private ######

  def item_params
    params.require(:item).permit(:summary, :description, :condition, :image, :category)
  end
  
end # class ItemsController
