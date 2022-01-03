class Api::UsersController < ApplicationController

    skip_before_action :verify_authenticity_token, only: [:create]

    def show
        @user = User.find(params[:id])
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render "api/users/show"
        else 
            render json: @user.errors.full_messages
        end
    end

    private

    def user_params
        params.require(:user).permit(:id, :password)
    end

end
