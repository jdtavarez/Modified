class Api::ContentsController < ApplicationController

    def index
        @album = Album.find(params[:album_id])
        @contents = Content.where(album_id: params[:album_id])
        render "api/contents/index"
    end
    
    def show
        @content = Content.find(params[:id])
        @album = Album.find(@content.album_id)
        render "api/contents/show" 
    end

end