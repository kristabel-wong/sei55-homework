Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #generally our controller names will match our table name ie 'pets#' instead of pages#
  get '/hello' => 'pages#say_hi'

  get '/funny' => 'pages#haha'

  get '/hello/:person' => 'pages#greet'

  get '/calc/:first/:op/:second' => 'calculator#operations'

  #form based calculator
  #1. show the form
  get '/calc' => 'calculator#home'

  #2. form submit, show results
  # Note that we can re-use the URL based calculator because we have used the same names from that dynamic URL i.e. :first etc as the names of our form fields
  get '/calc/answer' => 'calculator#operations'

end

#do not add routes after the end