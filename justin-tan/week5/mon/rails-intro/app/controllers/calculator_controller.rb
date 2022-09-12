class CalculatorController < ApplicationController

    def operations
        @first = params[:first].to_i
        @op = params[:op]
        @second = params[:second].to_f

        # @results = case @op
        # when "+" 
        #     @first_num + @second_num
        # when "-"
        #     @first_num - @second_num
        # when "*"
        #     @first_num * @second_num
        # when "div"
        #     @first_num / @second_num
        # else
        #     "bad calculation"
        # end

        @results = @first.send @op, @second

    end

    def home


    end


end