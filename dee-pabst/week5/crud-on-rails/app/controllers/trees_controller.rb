class TreesController < ApplicationController

    def home
    end # home

    # READ - all
    def index
        @trees = Tree.all
    end # index

    # READ - one
    def show
        @tree = Tree.find params[:id]
    end
    

end #TreesController class