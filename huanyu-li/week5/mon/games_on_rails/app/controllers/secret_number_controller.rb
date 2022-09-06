class SecretNumberController < ApplicationController

    def home
    end

    def show
        @input = params[:numb]
        @num = [1,2,3,4,5,6,7,8,9,10].sample
        @answer =  @input == @num.to_s ? 'You Win!' : 'You Lose!' 
    end

end
