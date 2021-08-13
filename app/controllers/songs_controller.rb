class SongsController < ApplicationController

    def index 
        songs = Song.all
        render json: songs, only: [:genre, :artist, :title, :album_img_url] 
    end  

    def create 
        song = Song.create(song_params)
        render json: song, only: [:genre, :artist, :title, :album_img_url] 
    end 

    private 

    def song_params  
        params.require(:song).permit(:genre, :artist, :title, :album_img_url)
    end 

end
