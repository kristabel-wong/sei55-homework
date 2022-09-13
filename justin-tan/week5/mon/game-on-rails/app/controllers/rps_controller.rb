class RpsController < ApplicationController

    def decide
        
    end
    
    def outcome

        @user_play = params[:play].to_sym

        game_array = [
            :rock,
            :paper,
            :scissors
        ]

        @comp_play = game_array[rand game_array.length]

        tie = "It's a tie"
        lose = "Sorry you lost"
        win = "Congrats you won!"

        outcomes = {
            rock: {rock: tie, paper: lose, scissors: win},
            paper: {rock: win, paper: tie, scissors: lose},
            scissors: {rock: lose, paper: win, scissors: tie},
        }

        @message = outcomes[@user_play][@comp_play]

        
    end


end