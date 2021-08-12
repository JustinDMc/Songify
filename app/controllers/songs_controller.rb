class SongsController < ApplicationController

    def index 
        songs = Song.all
        render json: songs, only: [:genre, :artist, :title, :album_img_url] 
    end  

end
