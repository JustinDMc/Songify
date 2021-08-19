import React from 'react'

function About() {
    return (
            <div className="About-Page">
                <div className="about-top-half" style={{minWidth: "100vw", minHeight: "50vh"}}>
                        <h1 style={{fontSize: "60px", marginBottom: "20px", textAlign: "Left", color: 'white'}}>About Us</h1>
                        <hr style={{marginLeft: "0px", border: "3px solid black", maxWidth: "100px"}}></hr>
                        <p style={{color: 'white', maxWidth: "500px"}}>Songify was devloped with the intention of promoting human interaction through music. By giving people the ability to share such an intrinsicly human interest -- <b>the music they love</b> -- we have created a space in the social media industry where connections are personal, deeply rooted, and genuine.</p>
                </div>
                <div style={{display: "flex", color: "black", textAlign: "center", backgroundColor: "white", height: "50vh"}}>
                    <div className="who-we-are" style={{flex: "33.3%", textAlign: "left", marginTop: "100px", marginLeft: "150px"}}>
                        <h1>Who We Are</h1>
                        <hr style={{marginLeft: "0px", border: "3px solid #ff6666", maxWidth: "100px"}}></hr>
                        <p style={{maxWidth: "250px"}}>Songify was founded and created by solo developer <b>Justin McArthur</b> in August, 2021. <br /> 
                        Justin wanted Songify to be a team of <b>like-minded people</b>, within a culture that promoted a mindset of <b>growth</b> and <b>communication</b>.</p>
                    </div>
                    <div className="who-we-are" style={{flex: "33.3%"}}>
                        <h1>What We Are</h1>
                    </div>
                    <div className="who-we-are" style={{flex: "33.3%", marginRight: "150px", marginTop: "100px"}}>
                        <h1>Why You Should Choose Us</h1>
                    </div>
                </div>
            </div>
    )
}

export default About
