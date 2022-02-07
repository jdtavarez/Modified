require 'open-uri'

class Api::UsersController < ApplicationController

    def show
        @user = User.find(params[:id])
        @playlists = @user.playlists
        render 'api/users/profile'
    end

    def create
        @user = User.new(user_params)
        @user.birthday = "#{bday_params[:month]}/#{bday_params[:day]}/#{bday_params[:year]}"
        avatar = URI.open("https://modified-seed-data.s3.amazonaws.com/profile.jpg")
        
        if @user.save
            @user.avatar.attach(io: avatar, filename: 'profile.jpg')
            login!(@user)
            render json: @user
        else 
            render json: @user.errors.full_messages
        end
    end

    def update
        @user = User.find(params[:id])
        @playlists = @user.playlists
        if @user.update(user_params) 
            render "api/users/profile"
        else 
            render json: @user.errors.full_messages
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :gender, :password, :avatar)
    end

    def bday_params
        params.require(:user).permit(:month, :day, :year)
    end

end
