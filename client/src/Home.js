import React from 'react'
import Button from '@material-ui/core/Button';
import {NavLink} from "react-router-dom"

function Home() {

    return (
        // Entire Home Page
        <div className="home-page" style={{textAlign: 'center'}}>

            <h1 style={{marginTop: "220px", fontSize: "100px", color: "white"}}>THIS IS SONGIFY</h1>

            <h3 style={{fontSize: "30px", color: "white"}}>The one stop for ALL music sharing on the web.</h3>

            <br></br>

            <Button style={{width: "165px", display: "inline-block", fontSize: "1em", margin: "1em", padding: "0.25em 1em", border: "2px solid white", borderRadius: "3px", color: "white"}}> 
                <NavLink style={{color: "white", textDecoration: "none"}}exact to="/quiz_page">Take Quiz</NavLink> 
            </Button>

            <Button style={{width: "165px", display: "inline-block", fontSize: "1em", margin: "1em", padding: "0.25em 1em", border: "2px solid #ff6666", borderRadius: "3px", backgroundColor: "#ff6666", color: "white"}}>
                <NavLink style={{color: "white", textDecoration: "none"}}exact to="/post_page">Create Post</NavLink>
            </Button>
        </div>








        // <div className="home-div" style={{display: 'grid', gridTemplateColumns: "repeat(2, 400px)", alignItems: "center", justifyContent: "space-around", textAlign: 'center'}}>

        //     {/* Take Quiz Card */}
        //     <div className="take-quiz-card" style={{border: "2px solid black", borderRadius: "16px", backgroundColor: "#6BBAA7", marginTop: "100px"}}>
        //         <h1>Take Quiz</h1>
        //         <p>Great for when you need to listen to the perfect song for YOU!</p>
        //         <button style={{backgroundColor: "#FBA100"}}>
        //             <NavLink exact to="/quiz_page">Take the quiz</NavLink>
        //         </button>
        //     </div>
        
        //     {/* Create Post Card */}
        //     <div className="create-post-card" style={{border: "2px solid black", borderRadius: "16px", backgroundColor: "#6BBAA7", marginTop: "100px"}}>
        //         <h1>Create Post</h1>
        //         <p>Great for when you want to share music you've discovered on your own!</p>
        //         <button style={{backgroundColor: "#FBA100"}}>
        //             <NavLink exact to="/post_page">Create new post</NavLink>
        //         </button>
        //     </div>

        // </div> 
    )
}

export default Home
