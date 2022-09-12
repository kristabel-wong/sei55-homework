class RpsController < ApplicationController

    def throw_selection

    end

    def throw_verdict

        @user_selection = params[:throw].downcase
        @rand_number = rand(0 .. 2)
        array = ["rock", "paper","scissors"]
        @comp_select = array[@rand_number]


        conditions = {
        "Rock" => "Scissors", 
        "Paper" =>  "Rock",
        "Scissors" => "Paper"
        }

        # rules of rock, paper, scissors can be expressed as a simple hash: player vs computer (key:value)

        if conditions[@user_selection] == @comp_select #check if one player won over the other with:
            @report=  "You win! You have selected #{@user_selection} while computer selected #{@comp_select}"
        elsif @user_selection == @comp_select
            @report =  "Its a draw!"
        else
            @report = "Computer wins! You have selected #{@user_selection} while computer selected #{@comp_select}"
        end



    end

end