Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'employees#home'
  # ----------------------------------------------------------- #
  #CREATE
  #1
  # get 'employees/new' => 'employees#new', as: 'new_indentured'
  #2.
  # ----------------------------------------------------------- #
  #READ
  #1.
  # get '/employees'      =>    'the_company#index'  
  #2.
  # get '/employees/:id'  =>    'the_company#show', as: 'employee'
  # ----------------------------------------------------------- #
  #UPDATE
  #1.
  # get '/employees/:id/edit' => 'the_company#edit', as: 'ammend_employee'
  #2.
  # patch 'employees/:id' => 'employees#update'
  # ----------------------------------------------------------- #
  #DELETE  
  # ----------------------------------------------------------- #

  # -------------------------- NEW WAY ---------------------------- #

  resources :departments

  resources :employees


end
