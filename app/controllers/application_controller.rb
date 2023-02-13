class ApplicationController < ActionController::API
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  before_action :authorized
  include ActionController::Cookies
  
  def current_user
    User.find_by(id: session[:user_id])
  end
  
  def authorized
    # return render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    return render json: {error: "Not authorized"}, status: :unauthorized unless current_user
  end

  private
  def render_unprocessable_entity(invalid) 
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

end
