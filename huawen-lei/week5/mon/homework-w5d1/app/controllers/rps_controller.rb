class RpsController < ApplicationController
    def rps_info
    end # rps_info

    def rps_results
        @throw = params[:throw]

        computer_num = rand(1..3)

        if computer_num == 1
            @computer_throw = 'rock'
        elsif computer_num == 2
            @computer_throw = 'paper'
        else
            @computer_throw = 'scissors'
        end

        if (@throw == 'rock' && @computer_throw == 'scissors') || (@throw == 'scissors' && @computer_throw == 'paper') || (@throw == 'paper' && @computer_throw == 'rock')
            @result = 'You win!'
        elsif (@computer_throw == 'rock' && @throw == 'scissors') || (@computer_throw == 'scissors' && @throw == 'paper') || (@computer_throw == 'paper' && @throw == 'rock')
            @result = 'You lose!'
        else
            @result = 'Fair game'
        end


    end # rps_results

end # RpsController