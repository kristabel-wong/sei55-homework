class SecretController < ApplicationController

    def guess

    end

    def check
        @number = params[:number].to_i

        @secret_num = rand (1..10)

        @correct = "Yes! I was thinking of #{@secret_num} and you guessed #{@number}. Are you psychic?"

        @wrong = "Sorry, I was thinking of #{@secret_num} and you guessed #{@number}. Try again. "

        @number == @secret_num ? @message = @correct : @message = @wrong


    end

end