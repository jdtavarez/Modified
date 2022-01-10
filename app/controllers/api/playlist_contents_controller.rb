# class Api::PlaylistContentsController < ApplicationController

#     skip_before_action :verify_authenticity_token

#     def index
#         @playlists = Playlist.where(creator_id: params[:user_id])
#         # @playlists = Playlist.where(creator_id: 1)
#         # @playlists ||= Playlist.where(creator_id: params[:artist_id])
#         render "api/playlists/index"
#     end

#     def show
#         id = params[:id]
#         @playlist = Playlist.find(id)
#         @contents = @playlist.contents
#         @order = @playlist.playlist_contents
#         render "api/playlists/show"
#     end

#     def create
#         @playlist = Playlist.new
#         title = "My Playlist ##{current_user.playlists.size}"
#         @playlist.title = title
#         @playlist.creator_id = current_user.id
#         @playlist.creator_type = "User"
#         @playlist.save
#         render :show
#     end

#     def update
#         @playlist = Playlist.find(params[:id])
#     end

# end
