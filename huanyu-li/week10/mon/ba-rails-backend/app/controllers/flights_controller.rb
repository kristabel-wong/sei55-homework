class FlightsController < ApplicationController

  def index
    render json: Flight.all
  end # index


  def search

    flights = Flight.where origin: params[:origin], destination: params[:destination]

    # sleep 3  # test the loading message in the frontend

    render json: flights, include: {
      airplane: {
        only: [ :name ]
      }
    }

  end # search


  def show
    flight = Flight.find params[:id]
    render json: flight,include:[:reservations,:airplane]
      
    
  end # show

end
