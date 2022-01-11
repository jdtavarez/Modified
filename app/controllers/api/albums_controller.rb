class Api::ArtistsController < ApplicationController

    def index 
        @albums = Album.all
        render json: @albums
    end

end