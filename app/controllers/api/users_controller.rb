class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        @user.birthday = "#{bday_params[:month]}/#{bday_params[:day]}/#{bday_params[:year]}"
        if @user.save
            login!(@user)
            render json: @user
        else 
            render json: @user.errors.full_messages
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :gender, :password)
    end

    def bday_params
        params.require(:user).permit(:month, :day, :year)
    end

end
