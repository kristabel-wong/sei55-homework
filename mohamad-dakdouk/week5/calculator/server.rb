require 'sinatra'
require 'sinatra/reloader'

get '/' do
    
    erb :home
end

get '/about' do


    erb :cal_about
end

get '/cal/:first/:operator/:second' do
    @first_num = params[:first].to_i
    @op = params[:operator]
    @second_num = params[:second].to_i
    


@result = case @op
when '+' then @first_num + @second_num
when '-' then @first_num - @second_num
when '*' then @first_num * @second_num
when 'div' then @first_num / @second_num
end
    
erb :calc_results
end

get '/calc/answer' do 

    @first = params[:first_num].to_i
    @op = params[:operator]
    @second = params[:second_num].to_i
    
    @result = case @op
    when '+' then @first + @second
    when '-' then @first - @second
    when '*' then @first * @second
    when 'div' then @first / @second
    end
    
    "Result is #{@result}"
erb :cal_form_answer
end

# This is the route which the calculator form
#on the /about route actually sumbits tp

# get :calc_results
#     "First num #{ params[:first]}, second num #{ params[:second]}, operator #{ params[:operator]}"

    
#     # @number1 = params[:number1]
#     # @number2 = params[:number2] 
#     # @number3 = @number1 + @number2
#     # params[:number1] + params[:number2]
#     erb :cal_results 

#     # params.to_s - this tests the code
# end

# if @op == '+'
#     @result = @first_num + @second_num
#    elsif @op == '-'
#     @result = @first_num - @second_num
#     elsif @op == '*'
#         @result = @first_num * @second_num 
#     elsif @op == 'div'
#         @result = @first_num / @second_num 
#    end