Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Welcome page
  root to: 'games#welcome'

  # MAgic 8 Ball 1: Get Question (form)
  get '/magic'  => 'magic#question'

  # Magic 8 ball 2: Provide Answer
  get 'magic/answer' =>  'magic#answer'


  # Secret Number

  # 1 . form
  get '/secret' => 'secret#guess'


  # 2. right or wrong
  get 'secret/check' =>
 'secret#check'



  ## Rock Paper Scissors

  get 'rock_paper_scissors/' => 'rock_paper_scissors#choose' 

  get 'rock_paper_scissors/throw' => 'rock_paper_scissors#throw'

end
