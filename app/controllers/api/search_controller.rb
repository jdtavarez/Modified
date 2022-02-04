class Api::SearchController < ApplicationController

    def index
        @contents = Content.all
        @artists = Artist.all
        @albums = Album.all
        @playlists = Playlist.all
        render 'api/search/index'
    end

end