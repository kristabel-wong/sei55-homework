Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # get '/' => 'stocks#welcome'
  
  root to: 'stocks#welcome'

  # 1. Search form
  get '/stocks' => 'stocks#form'

  # 2. Form submit, use gem to perform lookup, show results

  get '/stocks/lookup' =>'stocks#lookup'

  # 1. Movie search form - create a new controller
  get '/movies' => 'movies#search'

  # 2. Movie search form submit, use HTTParty to look up movie submitted by user, loop over results in template
  get '/movies/results' => 'movies#results'



end
