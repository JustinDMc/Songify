import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router-dom";
import { HeartLogo } from "./styled"
import { CommentLogo } from "./styled"

function PostThoughts( { history, allPosts, setAllPosts, songDigit } ) {
    const [thoughts, setThoughts] = useState("");

    const commentIcon = <CommentLogo style={{color: "white", height: "30px"}}/>
    const [liked, setLiked] = useState(<HeartLogo style={{color: "white", height: "30px"}}/>)

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
            history.push("/home")
        };
    }


    return (
        <div>
            <h1 style={{textAlign: "center", paddingTop: "70px", fontSize: "60px", color: "white"}}>Add a caption to your post</h1>
                <div style={{position: "fixed", borderRadius: "8px", backgroundColor: "black", height: "550px", width: "440px", marginLeft: "38%", border: "4px solid #ff6666"}}>
                    {/* <h1 style={{color: "white", marginLeft: "15px", marginTop: "30px", textAlign: "center"}}>LIVE DEMO</h1> */}
                    <br />
                    <img src="https://data.whicdn.com/images/344524632/original.jpg" style={{maxLength: "50px", maxHeight: "50px", marginLeft: "25px", marginTop: "10px", borderRadius: "50%"}} />
                    <label className="postUserName"style={{fontSize: "18px", fontWeight: "bold"}}>JusMc</label>
                    <br />
                    <br />
                    <div style={{width: "220px", height: "200px", backgroundColor: "white", borderRadius: "12px", border: "3px solid white", marginLeft: "25%", marginTop: "0px"}}>
                        <img src="https://m.media-amazon.com/images/I/A1ZTtDmwPLL._SS500_.jpg" style={{width: "110px", height: "110px", marginLeft: "52px", marginTop: "28px"}} />
                        <br />
                        <b style={{marginLeft: "40%", fontSize: "14px"}}>COIN</b>
                        <br></br>
                        <b style={{marginLeft: "2%"}}>Let It All Out (10:05)</b>
                    </div>
                    <br />
                    <br />
                    <label style={{marginLeft: "25px"}}>{liked}</label>
                    <label style={{marginLeft: "25px"}}>{commentIcon}</label>    
                    <br />
                    <br />
                    <form onSubmit={handlePostSubmit}>
                    <TextField 
                        style={{backgroundColor: "white", marginLeft: "25%", borderRadius: "5px"}} 
                        size="medium" 
                        variant="outlined" 
                        type="text" 
                        placeholder="What do you think?"
                        name="genre" 
                        multiline
                        maxRows={4}
                        value={thoughts}
                        onChange={(e) => setThoughts(e.target.value)}
                    />
                    <br />
                    <br />
                    <Button variant="contained" submit type="submit" value="button" style={{color: "black", fontWeight: "bold", backgroundColor: "green", marginLeft: "32%"}}>Publish Post</Button>
                    </form>
                </div>
            {/* <form className="login-form" style={{backgroundColor: "black", opacity: "90%", border: '1px solid black', borderRadius: "8px", padding: "8px", width: "475px", margin: "auto", marginTop: "110px", textAlign: "center"}} onSubmit={handlePostSubmit}>
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
            </form>  */}
        </div>
    )
}

export default withRouter (PostThoughts);