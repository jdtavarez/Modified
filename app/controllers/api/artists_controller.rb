class Api::ArtistsController < ApplicationController
    
    def show
        @artist = Artist.find(params[:id])
        @contents = @artist.contents
        @albums = @artist.albums
        @playlists = @artist.playlists
        @featured_playlists = @artist.featured_playlists.distinct
        render 'api/artists/show'
    end
    
end