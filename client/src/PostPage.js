import React, {useState} from 'react'
import PostThoughts from "./PostThoughts";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { HeartLogo } from "./styled"
import { CommentLogo } from "./styled"
import { ArrowLogo } from "./styled"
// import { useHistory } from 'react-router-dom'

function PostPage( {allPosts, setAllPosts, songCollection, history } ) {
    // const history = useHistory();
    const [genre, setGenre] = useState("");
    const [artist, setArtist] = useState("");
    const [artist2, setArtist2] = useState(<b style={{marginLeft: "63px"}}>-------</b>);
    const [songTitle, setSongTitle] = useState("");
    const [songTitle2, setSongTitle2] = useState(<b style={{marginLeft: "63px"}}>-------</b>)
    const [imageURL, setImageURL] = useState("");
    const [imageURL2, setImageURL2] = useState(<div style={{backgroundColor: "#ff6666", width: "90px", height: "90px", marginLeft: "52px", marginTop: "28px"}}><h3 style={{textAlign: "center", paddingTop: "15px"}}>album image</h3></div>)

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
        <div className="post-page">
            {songCreated ? 
            <div style={{display: "flex"}}>
                <div>

                {/* Starts the form div */}
                {/* <h1 style={{marginLeft:"105px", paddingTop:"20px"}}>Step 1: Enter Song Info</h1> */}
                <div style={{display: "flex", marginTop: "7%", marginLeft: "21%", position: "relative"}}>
                    {/* <div>
                        <img style={{height: "430.25px", width: "400px"}} src="https://i.pinimg.com/originals/99/4f/9a/994f9ac00dccd0d216529a285930d95c.jpg" />
                    </div> */}
                <form className="login-form" style={{backgroundColor: "black", opacity: "90%", border: "4px solid #ff6666", padding: "8px", height: "563px", width: "1200px", borderRadius: "4px"}} onSubmit={handleSongSubmit}>
                    <h1 style={{color: "white", marginLeft: "30px", marginTop: "60px"}}>ENTER YOUR <br /> SONG INFORMATION</h1>
                    <br />
                    <input  style={{backgroundColor: "black", border: "none", borderBottom: "2px solid gray", marginLeft: "30px", width: "500px"}} 
                        type="text" 
                        placeholder="Genre"
                        name="genre" 
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                    />
                    <br></br>
                    <br></br>
                    <br />
                    <input  style={{backgroundColor: "black", border: "none", borderBottom: "2px solid gray", marginLeft: "30px", width: "500px"}}
                        type="text"              
                        placeholder="Artist"
                        name="artist" 
                        value={artist}
                        onChange={handleArtistChange}
                    />
                    <br></br>
                    <br></br>
                    <br />
                    <input  style={{backgroundColor: "black", border: "none", borderBottom: "2px solid gray", marginLeft: "30px", width: "500px"}}
                        type="text"
                        placeholder="Song Title"
                        name="title"
                        value={songTitle}
                        onChange={handleSongTitleChange} 
                    />
                    <br></br>
                    <br></br>
                    <br />
                    <label style={{color: "white", fontSize: "18px", marginLeft: "30px", fontWeight: "bold"}}>Album Cover  </label>
                    <label style={{width: "100px"}}>
                    <Button onClick={handleClickOpen} style={{border: "2px solid black", backgroundColor: "white", color: "black", borderRadius: "8px"}} size="small">Select </Button>
                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" useref="entry-form" style={{marginTop: "100px"}}>
                        <DialogTitle id="form-dialog-title">Select an album image-</DialogTitle>
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
                    <label style={{color: "white", marginLeft: "8px"}}><em>--requires genre to be selected--</em></label>
                    {/* <TextField style={{backgroundColor: "white"}} size="small" variant="outlined"
                        placeholder="Image URL..."
                        name="image_url" 
                        value={imageURL}
                        onChange={(e) => setImageURL(e.target.value)}
                    /> */}
                    <br></br>
                    <br></br>

                    <Button variant="contained" submit type="submit" value="button" style={{color: "white", fontWeight: "bold", marginLeft: "30px", backgroundColor: "green", marginTop: "20px"}}>
                    Add my thoughts!
                    </Button>
                </form> 
                {/* <ArrowLogo style={{height: "140px", zIndex: "10", marginTop: "150px", width: "250px", marginLeft: "40px"}}/> */}
                </div>
                {/* The line above ends the form div */}

                </div>
                <div>

                    {/* <h1 style={{marginLeft: "50px", marginTop: "300px", fontSize: "32px", color: "black"}}>Step 2: See Your Post Being Made</h1> */}

                    <div style={{position: "fixed", borderRadius: "8px", backgroundColor: "black", height: "550px", width: "440px", marginLeft: "-150px", zIndex: 1, marginTop: "200px", border: "4px solid #ff6666"}}>
                        <h1 style={{color: "white", marginLeft: "15px", marginTop: "30px", textAlign: "center"}}>LIVE DEMO</h1>
                        <br />
                        <img src="https://data.whicdn.com/images/344524632/original.jpg" style={{maxLength: "50px", maxHeight: "50px", marginLeft: "25px", marginTop: "10px", borderRadius: "50%"}} />
                        <label className="postUserName"style={{fontSize: "18px", fontWeight: "bold"}}>JusMc</label>
                        <br />
                        <br />
                        <div style={{width: "200px", height: "200px", backgroundColor: "white", borderRadius: "12px", border: "3px solid white", marginLeft: "25%", marginTop: "0px"}}>
                            {imageURL2}
                            <br />
                            <br />
                            {artist2}
                            <br></br>
                            {songTitle2}
                        </div>
                        <br />
                        <br />
                        <label style={{marginLeft: "25px"}}>{liked}</label>
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
