Rails.application.routes.draw do

  # social media side
  resources :users, only: [:index, :show]

  resources :comments 

  resources :posts 

  # overlap
  resources :songs, only: [:index, :show]

  # quiz side
  resources :quizzes, only: [:index]

  resources :quiz_questions, only: [:index, :show]

  resources :questions, only: [:index, :show]

  resources :question_answers, only: [:index, :show]

end
