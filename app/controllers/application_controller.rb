class ApplicationController < ActionController::API
  before_action :authorized
  include ActionController::Cookies
  
  def authorized
    return render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
  end

  def current_user
    User.find_by(id: session[:user_id])
  end

end
