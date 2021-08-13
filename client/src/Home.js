import React from 'react'
import {NavLink} from "react-router-dom"

function Home() {

    return (
        // Entire Home Page
        <div className="home-div" style={{display: 'grid', gridTemplateColumns: "repeat(2, 400px)", alignItems: "center", justifyContent: "space-around", textAlign: 'center'}}>

            {/* Take Quiz Card */}
            <div className="take-quiz-card" style={{border: "2px solid black", borderRadius: "16px", backgroundColor: "blue", marginTop: "100px"}}>
                <h1>Take Quiz</h1>
                <p>Great for when you need to listen to the perfect song for YOU!</p>
                <button>
                    <NavLink exact to="/quiz_page">Take the quiz</NavLink>
                </button>
            </div>
        
            {/* Create Post Card */}
            <div className="create-post-card" style={{border: "2px solid black", borderRadius: "16px", backgroundColor: "blue", marginTop: "100px"}}>
                <h1>Create Post</h1>
                <p>Great for when you want to share music you've discovered on your own!</p>
                <button>
                    <NavLink exact to="/post_page">Create new post</NavLink>
                </button>
            </div>

        </div> 
    )
}

export default Home
