import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import {NavLink} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Confetti from 'react-confetti'

function QuizResult( { setAllPosts, allPosts } ) {

    const history = useHistory();

    const [seconds, setSeconds] = useState(3.4)

    const [seconds2, setSeconds2] = useState(3)

    const timer = () => {
        setSeconds(seconds -1)
    }

    const timer2 = () => {
        setSeconds2(seconds2 - 1)
    }

    const [placeholder, setPlaceHolder] = useState("What Do You Think?")

    const focusEvent = () => {
        setPlaceHolder("")
    }

    const [thoughts, setThoughts] = useState("");

    async function handlePostSubmit(e){
        e.preventDefault();
        const post = {
            user_id: 1,
            song_id: 19,
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
        <div onload={setTimeout(timer, 1000)}>
            {seconds > 1 ? 
            <div style={{width: "100vw", height: "90.7vh", backgroundColor: "black", marginTop: "-67px"}}>
                <h1 style={{ fontSize: "100px", color: "white", textAlign: "center", color: "white", paddingTop: "220px"}}>Determining your song 
                    <label>
                        <div class="lds-ellipsis" style={{marginBottom: "-38px"}}>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </label>
                </h1>
                <h3 style={{color: "white", textAlign: "center"}}>(This may take a while)</h3>
            </div>
            :
            <div style={{display: "flex"}}>

            {/* Song Result Div */}
            <div style={{flex: "70%"}}>
            <div style={{border: "4px solid black", borderRadius: "8px", backgroundColor: "#000000", opacity: "90%", height: "550px", maxWidth: "550px", marginTop: "10%", marginLeft: "28%"}}>
                <Confetti 
                onload={setTimeout(timer2, 1000)}
                width="1900"
                height="900"
                numberOfPieces="200"
                />
                {/* <h1 style={{color: "white", textAlign: "center"}}>Cool stuff is gonna go here</h1> */}
                <div>
                    <img style={{width: "250px", height: "250px", marginLeft: "150px", marginTop: "100px"}} src="https://images.genius.com/a16c1e511ecf7741217439e0c49dedcd.999x999x1.jpg"/>
                    <br />
                    <br />
                    <h2 style={{color: "white", textAlign: "center"}}>The Wallows</h2>
                    <h2 style={{color: "white", textAlign: "center"}}>Just Like A Movie</h2>
                </div>
            </div>
            </div>

            {/* Result Meaning Div */}
            <div style={{flex: "30%", height: "90.7vh", backgroundColor: "#fffff0"}}>
                <h1 style={{textAlign: "center", marginTop: "22%"}}>Your Result</h1>
                <p style={{textAlign: "center", color: "black"}}>This song is a great listen for those looking to have an upbeat, happy rest of their day. 
                Users that get this result are often calm, empathetic, and explorers at heart. 
                <br />
                This song is best listened to with a warm coffee somewhere quiet, where you can fully absorb the message and meaning behind the lyrics.
                </p>
                <br />
                <form onSubmit={handlePostSubmit}>
                <input 
                    onFocus={focusEvent}
                    placeholder={placeholder} 
                    value={thoughts}
                    onChange={(e) => setThoughts(e.target.value)}
                    className="results-p" 
                    type="text" 
                    style={{fontSize: "14px", width: "450px", marginLeft: "50px", height: "40px", marginBottom: "50px", borderRadius: "8px"}}>
                </input>
                <Button variant="contained" submit type="submit" value="button" style={{color: "white", fontWeight: "bold", marginLeft: "20.5%", backgroundColor: "#ff6666", marginBottom: "20px"}}>
                    <NavLink style={{color: "white", textDecoration: "none"}}exact to="/home">Cancel</NavLink>
                </Button>
                <Button variant="contained" submit type="submit" value="button" style={{color: "white", fontWeight: "bold", marginLeft: "20.5%", backgroundColor: "green", marginBottom: "20px"}}>
                    Post Result!
                </Button>
                </form>
            </div>

            </div>
            }
        </div>
    )
}

export default QuizResult;
