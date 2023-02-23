Rails.application.routes.draw do
  
  resources :categories, only: [:index, :create] 
  resources :expenses, only: [:index, :create, :update, :destroy] 
  resources :notes, only: [:create]

  # categories
  # get "/categories", to: "categories#index"
  # get "/categories/:id", to: "categories#show"
  # post "/categories", to: "categories#create"
  # get "/categories/:id/expenses", to: "categories#expenses_index"

  # users
  get "/me", to: "users#show"
  post "/signup", to: "users#create" 

  # sessions
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"


  # notes
  # post "/expenses/:expense_id/notes", to: "notes#create"
  # delete "/expenses/:expense_id/notes/:id", to: "notes#destroy"

  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
