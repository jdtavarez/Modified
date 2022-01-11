require 'open-uri'

class Api::PlaylistsController < ApplicationController

    def index
        @playlists = Playlist.where(creator_id: params[:user_id])
        @playlists ||= Playlist.where(creator_id: params[:artist_id])
        render "api/playlists/index"
    end

    def create
        @playlist = Playlist.new
        title = "My Playlist ##{(current_user.playlists.size)+1}"
        @playlist.title = title
        @playlist.creator_id = current_user.id
        @playlist.creator_type = "User"
        cover = URI.open('https://modified-seed-data.s3.amazonaws.com/empty_playlist.png')
        if @playlist.save 
            @playlist.image.attach(io: cover, filename: "empty_playlist.png")
            render "api/playlists/show"
        end
    end

    def update
        @playlist = Playlist.find(params[:id])
        if @playlist.update(playlist_params) 
            render "api/playlists/show"
        else 
            render json: @playlist.errors.full_messages
        end
    end

    def destroy 
        @playlist = Playlist.find(params[:id])
        @playlist.destroy
        render json: @playlist.id
    end

    private 

    def playlist_params
        params.require(:playlist).permit(:title, :description, :image)
    end

end
