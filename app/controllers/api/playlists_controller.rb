class Api::Playlists < ApplicationController

    def show
        id = params[:id]
        @playlist = Playlist.find(id)
        @songs = @playlist.content
        render json: {playlist: @playlist, content: @content}
    end

    def create
        @playlist = Playlist.new
        title = "My Playlist # #{current_user.playlists.size}"
        @playlist.title = title
        @playlist.creator_id = current_user.id
        @playlist.creator = "User"
        @playlist.save
        render :show
    end

    private 

    def playlist_params
        params.require(:playlist).permit(:title, :description)
    end

end
