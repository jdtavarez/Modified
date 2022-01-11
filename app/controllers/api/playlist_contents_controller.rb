class Api::PlaylistContentsController < ApplicationController

    def index
        @playlist = Playlist.find(params[:playlist_id])
        @playlist_contents = PlaylistContent.includes(:content).where(playlist_id: params[:playlist_id])
        render "api/playlist_contents/show"
    end

end