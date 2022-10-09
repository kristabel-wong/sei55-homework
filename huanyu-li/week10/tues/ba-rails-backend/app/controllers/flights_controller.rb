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
    },methods:[:departure_date_formatted]

  end # search


  def show
    flight = Flight.find params[:id]
    # render json: flight,include:[:reservations,:airplane]
    render json: flight,include:{
      airplane:{
        only:[:name,:rows,:cols]
        # except:[:created_at, :updated_at]
      },

      reservations:{
        only:[:col,:row,:user_id],
        include:{
          user:{
            only:[:name]
          }
        }
      }
    }
      
    
  end # show

end
