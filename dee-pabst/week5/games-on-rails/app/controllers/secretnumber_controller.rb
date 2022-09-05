class SecretnumberController < ActionController::Base
    
    def guess
    end

    def resolve
        @correct_guess = false
        @computer_guess = rand 1..10
        @human_guess = params['guess'].to_i
        if (@human_guess == @computer_guess)
            @correct_guess = true
        end
        @correct_guess
    end
    
end
