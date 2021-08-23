import React, {useState} from 'react'
import PostThoughts from "./PostThoughts";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {NavLink} from "react-router-dom";
import { HeartLogo } from "./styled"
import { CommentLogo } from "./styled"
// import { useHistory } from 'react-router-dom'

function PostPage( {allPosts, setAllPosts, songCollection, history } ) {
    // const history = useHistory();
    const [genre, setGenre] = useState("");
    const [artist, setArtist] = useState("");
    const [artist2, setArtist2] = useState(<b style={{marginLeft: "63px"}}>-------</b>);
    const [songTitle, setSongTitle] = useState("");
    const [songTitle2, setSongTitle2] = useState(<b style={{marginLeft: "63px"}}>-------</b>)
    const [imageURL, setImageURL] = useState("");
    const [imageURL2, setImageURL2] = useState(<div style={{backgroundColor: "red", width: "90px", height: "90px", marginLeft: "52px", marginTop: "28px"}}><h3 style={{textAlign: "center", paddingTop: "15px"}}>album image</h3></div>)

    const [songCreated, setSongCreated] = useState(true);

    const [allSongs, setAllSongs] = useState(songCollection)
    const [songDigit, setSongDigit] = useState("") 

    const commentIcon = <CommentLogo style={{color: "white", height: "30px"}}/>
    const [liked, setLiked] = useState(<HeartLogo style={{color: "white", height: "30px"}}/>)

    async function handleSongSubmit(e){
        setSongDigit([...allSongs].map(song => song.id).slice(-1)[0])
        e.preventDefault();
        setSongDigit([...allSongs].map(song => song.id).slice(-1)[0])
        setSongCreated(false);
        const song = {
            genre: genre,
            artist: artist,
            title: songTitle,
            album_img_url: "https://m.media-amazon.com/images/I/A1ZTtDmwPLL._SS500_.jpg"
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

    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = (e) => {
      setOpen(false);
      setImageURL2(<img src="https://m.media-amazon.com/images/I/A1ZTtDmwPLL._SS500_.jpg" style={{width: "90px", height: "90px", marginLeft: "52px", marginTop: "28px"}} />)
    };

    const handleClose2 = () => {
        setOpen(false);
    }

    const handleArtistChange = (e) => {
        setArtist(e.target.value);
        setArtist2(<b style={{marginLeft: "75px"}}>{e.target.value}</b>);
    }

    const handleSongTitleChange = (e) => {
        setSongTitle(e.target.value);
        setSongTitle2(<b style={{marginLeft: "9px", fontSize: "14px"}}>{e.target.value}</b>);
    }

    return (
        <div>
            {songCreated ? 
            <div style={{display: "flex"}}>
                <div style={{flex: "50%", backgroundColor: "#fffff0", height: "91vh"}}>
                <h1 style={{textAlign: "center", marginTop: "140px", fontSize: "40px", color: "black"}}>What Song Are You Sharing?</h1>
                <form className="login-form" style={{backgroundColor: "black", opacity: "90%", border: '1px solid black', borderRadius: "8px", padding: "8px", width: "475px", margin: "auto", textAlign: "center"}} onSubmit={handleSongSubmit}>
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
                        onChange={handleArtistChange}
                    />
                    <br></br>
                    <br></br>
                    <label style={{color: "white", fontSize: "24px"}}>Song Title  </label>
                    <TextField style={{backgroundColor: "white"}} size="small" variant="outlined"
                        placeholder="Song title..."
                        name="title"
                        value={songTitle}
                        onChange={handleSongTitleChange} 
                    />
                    <br></br>
                    <br></br>
                    <label style={{color: "white", fontSize: "24px"}}>Album Cover  </label>
                    <label style={{width: "100px"}}>
                    <Button onClick={handleClickOpen} style={{border: "2px solid black", backgroundColor: "white", color: "black", borderRadius: "8px"}} size="small">Select</Button>
                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" useref="entry-form" style={{marginTop: "100px"}}>
                        <DialogTitle id="form-dialog-title">Select the album image-</DialogTitle>
                        <br></br>
                        <DialogContent>
                            <DialogContentText>
                            <div className="side-scroller">
                                {songCollection.filter(song => song.genre === genre).map(song => 
                                <div className="card" value={song.album_img_url} onClick={handleClose}>
                                <img style={{display: "inline-block", width: "125px", height: "125px"}} src={song.album_img_url}/>
                                </div>)}
                            </div>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions style={{marginRight: "130px"}}>
                            <Button onClick={handleClose2} color="primary">
                                Cancel
                            </Button>
                        </DialogActions>
                    </Dialog>
                    </label>
                    {/* <TextField style={{backgroundColor: "white"}} size="small" variant="outlined"
                        placeholder="Image URL..."
                        name="image_url" 
                        value={imageURL}
                        onChange={(e) => setImageURL(e.target.value)}
                    /> */}
                    <br></br>
                    <br></br>

                    <Button variant="contained" submit type="submit" value="button" style={{color: "black", fontWeight: "bold"}}>
                    Add my thoughts!
                    </Button>
                </form> 
                </div>
                <div style={{flex: "50%"}}>

                    <h1 style={{marginTop: "140px", fontSize: "40px", color: "white", textAlign: "center"}}>Watch your post come to life!</h1>

                    <div style={{borderRadius: "8px", backgroundColor: "#000000", opacity: "90%", height: "400px", width: "400px", margin: "auto"}}>
                        <img src="https://data.whicdn.com/images/344524632/original.jpg" style={{maxLength: "50px", maxHeight: "50px", marginLeft: "15px", marginTop: "10px", borderRadius: "50%"}} />
                        <label className="postUserName"style={{fontSize: "18px", fontWeight: "bold"}}>JusMc</label>
                        <br />
                        <br />
                        <div style={{width: "200px", height: "200px", backgroundColor: "#808080", borderRadius: "12px", border: "3px solid white", marginLeft: "25%", marginTop: "0px"}}>
                            {imageURL2}
                            <br />
                            {artist2}
                            <br></br>
                            {songTitle2}
                        </div>
                        <br />
                        <label style={{marginLeft: "15px"}}>{liked}</label>
                        <label style={{marginLeft: "25px"}}>{commentIcon}</label>
                        
                    </div>
                </div>
            </div>
            :
            <PostThoughts setAllPosts={setAllPosts} allPosts={allPosts} songDigit={songDigit} history={history}/>
            }
        </div>
    )
}

export default PostPage
