class Api::ArtistsController < ApplicationController

    def index 
        @artists = Artist.all
        render json: @artists
    end

    def show
        @artist = Artist.find(params[:id]).includes(:songs, :playlists)
        render json: @artist
    end
    
end