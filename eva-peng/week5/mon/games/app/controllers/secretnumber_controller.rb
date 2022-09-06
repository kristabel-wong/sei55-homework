class SecretnumberController < ApplicationController
    def show
    end

    def play
        @user_number = params[:user_number]
        @secret_number = rand (1..10)
        if @user_number == @secret_number
            @output = "Congrats! The secrect number is #{@secrct_number}, you got it right!"
        else
            @output = "Your guess doesn't match the secret number, try again."
        end
    end

end