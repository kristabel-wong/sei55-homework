class SecretNumberController < ApplicationController

    def query_form
    end

    def show_results

        @secret_number = rand 10
        @user_guess = params[:number].to_i

        if @secret_number != @user_guess
        @answer_number = "Wrong guess! You chose #{@user_guess} while computer chose #{@secret_number}"
        else
        @answer_number = "Congratulations! You chose #{@user_guess} which is the same as what computer chose!"
        end

    end

end