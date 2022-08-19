require 'sinatra'
require 'sinatra/reloader'

get '/' do
    erb :home
end

get '/about' do
    erb :calc_about
end

get '/calc/:num1/:operator/:num2' do

    @num1 = params[:num1].to_i
    @operator = params[:operator]
    @num2 = params[:num2].to_i

    
    # if @operator == "+"
    #     @result = @num1 + @num2
    # elsif @operator == "-"
    #     @result = @num1 - @num2
    # elsif @operator == "*"
    #     @result = @num1 * @num2
    # elsif @operator == "div"
    #     @result = @num1 / @num2
    # end

    @result = case @operator
    when '+' then @num1 + @num2
    when '-' then @num1 - @num2
    when '*' then @num1 * @num2
    when 'div' then @num1 / @num2
    end
    
    erb :calc_operator
end


# This is the route which the calculator form on the /about route actually submits to

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

    erb :calc_form_answer

end