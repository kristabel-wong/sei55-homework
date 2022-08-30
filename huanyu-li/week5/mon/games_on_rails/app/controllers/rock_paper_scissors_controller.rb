class RockPaperScissorsController < ApplicationController

def home
end

def show

    @throw = params[:throw]

    @computer = ['rock','paper','scissors'].sample

    game = {
        'rock'=> {
            'rock'=>'draw',
            'paper'=>'lose',
            'scissors'=>'win'
        },

        'paper'=>{
            'rock'=>'win',
            'paper'=>'draw',
            'scissors'=>'lose'
        },

        'scissors'=>{
            'rock'=>'lose',
            'paper'=>'win',
            'scissors'=>'draw'
        }
    }



    @result = @throw == nil ? 'Please select your choice, and try again' : game[@throw][@computer]
end


end