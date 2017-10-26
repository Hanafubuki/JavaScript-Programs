Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'site#index'

  resources :posts

  namespace :api do 
  	resources :posts, only: [:index, :create, :destroy, :update] 
  end
end