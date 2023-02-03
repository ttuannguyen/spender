Rails.application.routes.draw do
  
  resources :expenses
  resources :categories
  resources :notes
  
  # routes to handle sessions login and logout
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # user CRUD
  get "/me", to: "users#show"
  post "/signup", to: "users#create" 

  # expenses CRUD
  post "/users/:user_id/expenses", to: "expenses#create"
  patch "/users/:user_id/expenses/:id", to: "expenses#update"
  delete "/users/:user_id/expenses/:id", to: "expenses#destroy"

  # notes CRUD
  post "/expenses/:expense_id/notes", to: "notes#create"
  delete "/expenses/:expense_id/notes/:id", to: "notes#destroy"

  # custom routes for testing
  # get "/my_categories", to: "categories#my_categories"
  # get "/users/:user_id/expenses", to: "users#expenses_index"
  # get "/categories/:category_id/expenses", to: "categories#expenses_index"

  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
