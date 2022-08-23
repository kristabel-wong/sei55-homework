class RockpaperscissorsController < ApplicationController
    def show
    end

    def play
        @throw = params[:throw]
        @computer_throw = ['rock', 'paper', 'scissors'].sample
        if @throw == @computer_throw
            @result = "It's a draw." 
        elsif (@throw == 'rock' && @computer_throw == 'scissors') || (@throw == 'scissors' && @computer_throw == 'paper') || (@throw == 'paper' && @computer_throw == 'rock')
            @result = "You Won!"
        else
            @result = "Computer Won!"
        end

    end


end