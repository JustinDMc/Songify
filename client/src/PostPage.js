import React, {useState} from 'react'
import PostThoughts from "./PostThoughts";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {NavLink} from "react-router-dom";
// import { useHistory } from 'react-router-dom'

function PostPage( {allPosts, setAllPosts, songCollection, history } ) {
    // const history = useHistory();
    const [genre, setGenre] = useState("");
    const [artist, setArtist] = useState("");
    const [songTitle, setSongTitle] = useState("");
    const [imageURL, setImageURL] = useState("");

    const [songCreated, setSongCreated] = useState(true);

    const [allSongs, setAllSongs] = useState(songCollection)
    const [songDigit, setSongDigit] = useState("") 

    console.log(songCollection.map(song => song.album_img_url))
    async function handleSongSubmit(e){
        setSongDigit([...allSongs].map(song => song.id).slice(-1)[0])
        e.preventDefault();
        setSongDigit([...allSongs].map(song => song.id).slice(-1)[0])
        setSongCreated(false);
        const song = {
            genre: genre,
            artist: artist,
            title: songTitle,
            album_img_url: imageURL
        }
        const res = await fetch(`/songs`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(song)
        });    
        const songData = await res.json();
        if(res.ok) {
            setAllSongs([...allSongs, song])   
        };
    }

    return (
        <div>
            {songCreated ? 
            <div style={{display: "flex"}}>
                <div style={{flex: "65%"}}>
                <h1 style={{textAlign: "center", marginTop: "140px", fontSize: "80px", color: "white"}}>What Song Are <br/>You Sharing?</h1>
                <form className="login-form" style={{backgroundColor: "black", opacity: "90%", border: '1px solid black', borderRadius: "8px", padding: "8px", width: "475px", margin: "auto", marginTop: "110px", textAlign: "center"}} onSubmit={handleSongSubmit}>
                    <h1 style={{color: "white"}}>SONG INFO</h1>
                    <label style={{color: "white", fontSize: "24px"}}>Genre  </label>
                    <TextField style={{backgroundColor: "white"}} size="small" variant="outlined" type="text" 
                        placeholder="Genre..."
                        name="genre" 
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                    />
                    <br></br>
                    <br></br>
                    <label style={{color: "white", fontSize: "24px"}}>Artist  </label>
                    <TextField style={{backgroundColor: "white"}} size="small" variant="outlined"
                        placeholder="Artist..."
                        name="artist" 
                        value={artist}
                        onChange={(e) => setArtist(e.target.value)}
                    />
                    <br></br>
                    <br></br>
                    <label style={{color: "white", fontSize: "24px"}}>Song Title  </label>
                    <TextField style={{backgroundColor: "white"}} size="small" variant="outlined"
                        placeholder="Song title..."
                        name="title"
                        value={songTitle}
                        onChange={(e) => setSongTitle(e.target.value)} 
                    />
                    <br></br>
                    <br></br>
                    <label style={{color: "white", fontSize: "24px"}}>Album Cover URL  </label>
                    <TextField style={{backgroundColor: "white"}} size="small" variant="outlined"
                        placeholder="Image URL..."
                        name="image_url" 
                        value={imageURL}
                        onChange={(e) => setImageURL(e.target.value)}
                    />
                    <br></br>
                    <br></br>
                    <Button variant="contained" style={{color: "black", fontWeight: "bold"}}>
                    Confirm
                    </Button>
                    <Button variant="contained" submit type="submit" value="button" style={{color: "black", fontWeight: "bold"}}>
                    Add my thoughts!
                    </Button>
                </form> 
                </div>
                <div style={{flex: "35%"}}>
                    <h1 style={{textAlign: "center", marginTop: "140px", fontSize: "80px", color: "white"}}>Post</h1>
                    {songCollection.map(song => 
                    <img style={{width: "100px", height: "100px"}} src={song.album_img_url}/>)}
                </div>
            </div>
            :
            <PostThoughts setAllPosts={setAllPosts} allPosts={allPosts} songDigit={songDigit} history={history}/>
            }
        </div>
    )
}

export default PostPage
