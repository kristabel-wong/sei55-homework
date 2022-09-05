Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'games#welcome'

  # Magic 8 Ball
  # 1. Search form
  get '/magic8ball' => 'magic8ball#magic_form'

  # 2. Form submit, show results
  get '/magic8ball/:question' => 'magic8ball#magic_results'

  # Secret Number
  get '/secret_number' => 'secretnumber#secret_select'

  get '/secret_number/secret_results' => 'secretnumber#number_results'

  # Rock Paper Scissors
  get '/rock_paper_scissors' => 'rps#rps_info'

  get '/rock_paper_scissors/:throw' => 'rps#rps_results'



end
