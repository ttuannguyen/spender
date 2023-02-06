Rails.application.routes.draw do
  
  resources :expenses
  # resources :categories
  # resources :notes

  # categories
  get "/categories", to: "categories#index"
  get "/categories/:id", to: "categories#show"
  post "/categories", to: "categories#create"
  # get "/categories/:id/expenses", to: "categories#expenses_index"


  # sessions
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # users
  get "/me", to: "users#show"
  post "/signup", to: "users#create" 

  # expenses
  # get "/categories/:category_id/expenses", to: "categories#expenses_index"
  # get "/categories/:category_id/expenses", to: "expenses#create"
  # get "/categories/:id/expenses", to: "categories#expenses_index"
  post "/expenses", to: "expenses#create" 
  # post "/categories/:id/expenses", to: "expenses#create"
  patch "/users/:user_id/expenses/:id", to: "expenses#update"
  delete "/users/:user_id/expenses/:id", to: "expenses#destroy"

  # notes
  post "/expenses/:expense_id/notes", to: "notes#create"
  delete "/expenses/:expense_id/notes/:id", to: "notes#destroy"

  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
