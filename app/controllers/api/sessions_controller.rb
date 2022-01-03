class Api::SessionsController < ApplicationController

    skip_before_action :verify_authenticity_token
    before_action :require_logged_in, only: [:destroy]

    def create 
        @user = User.find_by_credentials(
            params[:user][:username], 
            params[:user][:password]
        )
        if @user 
            login!(@user)
            render "api/users/show"
        else
            render json: ['Invalid credentials']
        end
    end

    def destroy
        current_user ? logout!(current_user) : (render json: ["Not signed in"], status: 404)
    end
    
end
