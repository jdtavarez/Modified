class Api::Playlists < ApplicationController

    def show
        id = params[:id]
        @playlist = Playlist.find(id).includes(:songs)
        render json: @playlist
    end

    def create
        @playlist = Playlist.new
    end

    private 

    def playlist_params
        params.require(:playlist)
    end

end
