class SecretnumberController < ApplicationController

    def secret_select
        @dropdown_number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    end # secret_select

    def number_results
        @computer_number = rand(1..10)

        @choice_number = params[:choice_number].to_i

        if @computer_number == @choice_number
            @results = 'Yes, you are right!'
        else
            @results = 'Nope, have another try!'
        end

    end # number_results




end #class SecretnumberController