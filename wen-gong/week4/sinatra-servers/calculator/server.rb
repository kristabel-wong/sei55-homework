require 'sinatra'
require 'sinatra/reloader'

get '/' do
    erb :home
end

get '/about' do
    
    erb :calc_about
end

get '/calc/:first/:operator/:second' do
    @first_num = params[:first].to_i
    @op = params[:operator]
    @second_num = params[:second].to_i

    # if @op == '+'
    #     @result = @first_num + @second_num
    # elsif @op == '-' 
    #     @result = @first_num - @second_num   
    # elsif @op == '*' 
    #     @result = @first_num * @second_num   
    # elsif @op == 'div' 
    #     @result = @first_num / @second_num   
    # end

    @result = case @op
    when '+' then @first_num + @second_num
    when '-' then @first_num - @second_num
    when '*' then @first_num * @second_num
    when 'div' then @first_num / @second_num
    end
    erb :calc_results
   
end

get '/calc/answer' do

    @first = params[:first_number].to_i
    @op = params[:operator]
    @second = params[:second_number].to_i

    @result = case @op
    when '+' then @first + @second
    when '-' then @first - @second
    when '*' then @first * @second
    when 'div' then @first / @second
    end

    erb :calc_form_answer
    # "Result is #{ @result }"
    
   
end