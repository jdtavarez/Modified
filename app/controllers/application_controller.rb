class ApplicationController < ActionController::Base

    helper_method :current_user, :logged_in?, :require_logged_in, :require_logged_out

    def current_user
        current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        !!current_user
    end

    def login!(user)
        session[:session_token] = user.reset_session_token!
    end

    def logout!(user)
        user.reset_session_token!
        session[:session_token] = nil
    end

    def require_logged_in
    end

    def require_logged_out
    end
end
