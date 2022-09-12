class RockpaperController < ApplicationController

def hand

end

def check
    @player_move = params[:move].to_s
    comp_hand = ['rock', 'paper', 'scissor']
    random = rand 3
    @com_move = comp_hand[random]

    if @player_move == @com_move
        @result = "Both players picked #{@player_move}"
    elsif @player_move == 'rock' && @com_move == 'scissor'
        @result = "You Win"
    elsif @player_move == 'scissors' && @com_move == 'paper'
        @result = "You Win"
    elsif @player_move == 'paper' && @com_move == 'rock'
        @result = "You Win"
    else @result = "You Lose Losssseerrr"
    end

end


end
