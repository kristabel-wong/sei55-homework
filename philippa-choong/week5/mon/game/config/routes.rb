Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # verb '/path' => 'controller#method'

### Magic 8 Ball -------------------------
  root :to => 'magic#welcome'

  # 1. Magic ball search query 
  get '/magic' =>'magic#search_form'

  # 2. Magic search form submit
  
  get '/magic/magic_results' => 'magic#magic_results'

### Secret Number ----------------------

   # 1. Secret number search query 
  get '/secret_number' =>'secret_number#query_form'

  # 2. Secret number form submit
  
  get '/secret_number/number_results' => 'secret_number#show_results'



### Rock Paper Scissors (PRS)
  # 1. Get selection 
   get '/rps' =>'rps#throw_selection'

  # 2. RPS form submit 

  get '/rps/throw_verdict' => 'rps#throw_verdict'

end
