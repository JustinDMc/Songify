import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {NavLink} from "react-router-dom";
import { useHistory } from 'react-router-dom'

function PostPage( {songCollection } ) {
    const history = useHistory();
    const [genre, setGenre] = useState("");
    const [artist, setArtist] = useState("");
    const [songTitle, setSongTitle] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [thoughts, setThoughts] = useState("");

    const [songCreated, setSongCreated] = useState(true);

    const song_id = songCollection.filter(song => song.title === songTitle).map(song => song.id)

    async function handleSongSubmit(e){
        setSongCreated(false);
        e.preventDefault();
        const song = {
            genre: genre,
            artist: artist,
            title: songTitle,
            album_img_url: imageURL
        }
        const result = await fetch(`/songs`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(song)
        });       
    };

    function handlePostSubmit(e){
        const post = {
            id: 5,
            user_id: 1,
            song_id: 11,
            thoughts: thoughts,
            likes: 0
        }
        fetch(`/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        });
        // window.location.href = "/home";
    }

    return (
        <div>
            {songCreated? 
            <form className="login-form" style={{backgroundColor: "white", border: '1px solid black', borderRadius: "8px", padding: "8px", width: "475px", margin: "auto", marginTop: "250px", textAlign: "center"}} onSubmit={handleSongSubmit}>
                <h1 style={{color: "#992b1d"}}>What Song Are You Sharing?</h1>
                <label style={{fontSize: "24px"}}>Genre  </label>
                <TextField style={{marginRight: "0px"}} size="small" variant="outlined" type="text" 
                    placeholder="Genre..."
                    name="genre" 
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                />
                <br></br>
                <br></br>
                <label style={{fontSize: "24px"}}>Artist  </label>
                <TextField size="small" variant="outlined"
                    placeholder="Artist..."
                    name="artist" 
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                />
                <br></br>
                <br></br>
                <label style={{fontSize: "24px"}}>Song Title  </label>
                <TextField size="small" variant="outlined"
                    placeholder="Song title..."
                    name="title"
                    value={songTitle}
                    onChange={(e) => setSongTitle(e.target.value)} 
                />
                <br></br>
                <br></br>
                <label style={{fontSize: "24px"}}>Album Cover URL  </label>
                <TextField size="small" variant="outlined"
                    placeholder="Image URL..."
                    name="image_url" 
                    value={imageURL}
                    onChange={(e) => setImageURL(e.target.value)}
                />
                <br></br>
                <br></br>
                <Button variant="contained" submit type="submit" value="button" style={{color: "black", fontWeight: "bold"}}>Add my thoughts!</Button>
            </form> 
            :
            <form className="login-form" style={{backgroundColor: "white", border: '1px solid black', borderRadius: "8px", padding: "8px", width: "350px", margin: "auto", marginTop: "250px", textAlign: "center"}} onSubmit={handlePostSubmit}>
                <h1 style={{color: "#992b1d"}}>What Are Your Thoughts About This Song?</h1>
                <label style={{fontSize: "24px"}}>Thoughts  </label>
                <TextField size="medium" variant="outlined" type="text" 
                    placeholder="What do you think?"
                    name="genre" 
                    multiline
                    maxRows={4}
                    value={thoughts}
                    onChange={(e) => setThoughts(e.target.value)}
                />
                <br></br>
                <br></br>
                <Button variant="contained" submit type="submit" value="button" style={{color: "black", fontWeight: "bold"}}>Publish Post</Button>
            </form> 
            }
        </div>
    )
}

export default PostPage
