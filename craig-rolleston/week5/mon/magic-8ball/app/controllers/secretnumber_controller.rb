class SecretnumberController < ApplicationController

    def secretnumber
    end # secretnumber

    def form
        
    end #form

    def secretanswer
        @number = rand(1..10).to_i
    end# results


end #secretcontroller
