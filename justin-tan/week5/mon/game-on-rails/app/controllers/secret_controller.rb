class SecretController < ApplicationController

    def choose
        
    end
    
    def outcome
        
    @user_num = params[:secret]

    @comp_num = rand 10

    end

end