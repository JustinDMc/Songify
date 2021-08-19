Rails.application.routes.draw do

  # social media side
  resources :users, only: [:index]

  resources :comments 

  resources :posts

  resources :logins, only: [:create]

  # overlap
  resources :songs, only: [:index, :create]

  # quiz side
  resources :quizzes, only: [:index]

  resources :quiz_questions, only: [:index]

  resources :questions, only: [:index]

  resources :question_answers, only: [:index]

end
