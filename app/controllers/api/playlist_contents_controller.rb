class Api::PlaylistContentsController < ApplicationController

    def index
        @playlist = Playlist.find(params[:playlist_id])
        @playlist_contents = PlaylistContent.includes(:content).where(playlist_id: params[:playlist_id])
        render "api/playlist_contents/show"
    end

    def create
        @playlist_content = PlaylistContent.new(@playlist.id, @content.id)
        @playlist = Playlist.find(params[:playlist_id])
        @content = Content.find(params[:content_id])
        @playlist_content = PlaylistContent.new(@playlist.id, @content.id)
        render json: @playlist_song.errors.full_messages unless @playlist_content.save 
    end

    def destroy 
        @playlist_content = PlaylistContent.where(playlist_id: params[:playlist_id], content_id: params[:content_id])
        @playlist_content.destroy
        @playlist_contents = PlaylistContent.includes(:content).where(playlist_id: params[:playlist_id])
        render "api/playlist_contents/show"
    end

end