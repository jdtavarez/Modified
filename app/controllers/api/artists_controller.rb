class Api::ArtistsController < ApplicationController

    def index 
        @artists = Artist.all
        render json: @artists
    end

    def show
        @artist = Artist.find(params[:id])
        @content = @artist.content
        @playlist = @artist.playlists
        render json: @artist
    end
    
end