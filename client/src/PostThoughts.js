import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router-dom";

function PostThoughts( { history, allPosts, setAllPosts, songDigit } ) {
    const [thoughts, setThoughts] = useState("");

    async function handlePostSubmit(e){
        e.preventDefault();
        const post = {
            user_id: 1,
            song_id: (songDigit + 1),
            thoughts: thoughts,
            likes: 0
        }
        const res = await fetch(`/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        });
        const postData = await res.json();
        if(res.ok) {
            setAllPosts([...allPosts, post])
            history.push("/feed")
        };
    }

    return (
        <div>
            <h1 style={{textAlign: "center", marginTop: "140px", fontSize: "80px", color: "white"}}>What are your thoughts on this song?</h1>
            <form className="login-form" style={{backgroundColor: "black", opacity: "90%", border: '1px solid black', borderRadius: "8px", padding: "8px", width: "475px", margin: "auto", marginTop: "110px", textAlign: "center"}} onSubmit={handlePostSubmit}>
                <h1 style={{color: "#808080"}}>What do you think?</h1>
                <label style={{color: "white", fontSize: "24px"}}>Thoughts  </label>
                <TextField style={{backgroundColor: "white"}} size="medium" variant="outlined" type="text" 
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
        </div>
    )
}

export default withRouter (PostThoughts);