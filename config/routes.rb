Rails.application.routes.draw do

  # social media side
  resources :users, only: [:index]

  resources :comments 

  resources :posts 

  # overlap
  resources :songs, only: [:index]

  # quiz side
  resources :quizzes, only: [:index]

  resources :quiz_questions, only: [:index]

  resources :questions, only: [:index]

  resources :question_answers, only: [:index]

end
