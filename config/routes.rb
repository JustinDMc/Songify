Rails.application.routes.draw do

  resources :songs, only: [:index, :show]

  resources :answers, only: [:index, :show]
  
end
