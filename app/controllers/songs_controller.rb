class SongsController < ApplicationController

    def index 
        songs = Song.all
        render json: songs, only: [:id, :genre, :artist, :title, :album_img_url, :soundcloud_url] 
    end  

    def create 
        song = Song.create(song_params)
        render json: song, only: [:id, :genre, :artist, :title, :album_img_url, :soundcloud_url] 
    end 

    private 

    def song_params  
        params.require(:song).permit(:id, :genre, :artist, :title, :album_img_url, :soundcloud_url)
    end 

end
