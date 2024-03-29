Rails.application.routes.draw do
  
  # resources :categories, only: [:index, :create] 
  resources :expenses, only: [:index, :create, :update, :destroy] 
  resources :notes, only: [:create, :destroy]
  resources :budgets 

  # users
  get "/me", to: "users#show"
  post "/signup", to: "users#create" 


  # expenses
  post "/budgets/:budget_id/expenses/:id", to: "expenses#create"
  delete "/budgets/:budget_id/expenses/:id", to: "expenses#destroy"
  
  # sessions
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
