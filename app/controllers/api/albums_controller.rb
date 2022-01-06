class Api::ArtistsController < ApplicationController

    def index 
        @albums = Album.all
        render json: @albums
    end

    def show
        id = params[:id]
        @album = Album.find(id).includes)(:songs)
        render json: @album
    end

end