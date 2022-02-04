class Api::CategoriesController < ApplicationController

    def index 
        @categories = Category.all
        render json: @categories
    end

    def show
        @category = Category.find(params[:id])
        contents = @category.contents
        artists = []
        albums = []
        contents.each do |item|
            artists << item.artist_id
            albums << item.album_id
        end
        @artists = Artist.find(artists.uniq)
        @albums = Album.find(albums.uniq)

        render 'api/categories/show'
    end
    
end