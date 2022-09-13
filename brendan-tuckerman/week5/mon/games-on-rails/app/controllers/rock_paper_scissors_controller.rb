class RockPaperScissorsController < ApplicationController

    def choose

    end


    def throw

        @player_throw = params[:throw]
        
        ai_choices = ["rock", "paper", "scissors"]
        num = rand 3
        @ai_choice = ai_choices[num]
        
        beats =  {
            "rock" => "paper",
            "paper"  => "scissors",
            "scissors" => "rock"

        }

        # raise "hell"

        if  !ai_choices.include?(@player_throw)
            @message = "That is not a valid choice!"
        elsif @player_throw == @ai_choice
            @message = "We drew."
        elsif
            @player_throw == beats["#{@ai_choice}"]
            @message = "You win."
       else
            @message = "Bad luck, you lose."
        
        end #end if
        
        

    end #end throw


end