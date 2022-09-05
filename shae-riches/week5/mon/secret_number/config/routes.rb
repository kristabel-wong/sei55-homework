Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #get '/' => 'stocks#welcome'
  root to: 'stocks#welcome'

  get '/stocks' => 'stocks#form'

  get '/stocks/lookup' => 'stocks#lookup'

  get '/movies' => 'movies#form'

  get '/movies/lookup' => 'movies#lookup'


end

