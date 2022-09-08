class SecretController < ApplicationController

    def guess
    
    end

    def lookup
       @guess = params[:number_guess].to_i
       @random_number = rand 10.to_i

        if @guess == @random_number
        @result = "You have guessed correct #{@guess}"
        else @result = "You have guessed incorrectly value of #{@guess} the correct answer is #{@random_number} " 
        end

    end

end