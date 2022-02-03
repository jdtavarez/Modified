class Api::PlaylistContentsController < ApplicationController

    def index
        @playlist = Playlist.find(params[:playlist_id])
        @playlist_contents = PlaylistContent.includes(:content).where(playlist_id: params[:playlist_id])
        render "api/playlist_contents/show"
    end

    def create
        @playlist_content = PlaylistContent.new
        @playlist = Playlist.find(params[:playlist_id])
        playlist_length = @playlist.contents.size
        @playlist_content.playlist_id = params[:playlist_id]
        @playlist_content.content_id = params[:content_id]
        @playlist_content.position = playlist_length
        @playlist_contents = PlaylistContent.includes(:content).where(playlist_id: params[:playlist_id])
        if @playlist_content.save 
            render "api/playlist_contents/show" 
        else 
            render json: @playlist_content.errors.full_messages 
        end
    end

    def destroy 
        @playlist_content = PlaylistContent.find(params[:id])
        @playlist = @playlist_content.playlist
        @playlist_contents = PlaylistContent.includes(:content).where(playlist_id: @playlist.id)
        @playlist_content.destroy
        render "api/playlist_contents/show"
    end
end