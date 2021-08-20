import React from 'react'
import { WhoWeAreLogo } from "./styled"
import { HeadphoneLogo } from "./styled"
import { ThumbLogo } from "./styled"

function About() {
    return (
            <div className="About-Page" styled={{marginBottom: "20px"}}>
                <div className="about-top-half" style={{minWidth: "100vw", minHeight: "45vh", marginLeft: "100px", marginTop: "50px"}}>
                        <h1 style={{fontSize: "60px", marginBottom: "20px", textAlign: "Left", color: 'white'}}>About Us</h1>
                        <hr style={{marginLeft: "0px", border: "3px solid #ff6666", maxWidth: "100px"}}></hr>
                        <p style={{color: 'white', maxWidth: "500px"}}>Songify was devloped with the intention of promoting human interaction through music. By giving people the ability to share such an intrinsicly human interest -- <b>the music they love</b> -- we have created a space in the social media industry where connections are personal, deeply rooted, and genuine.</p>
                </div>
                <div className="About-Square" style={{position: "absolute", zIndex: "1", maxWidth: "400px", minHeight: "250px", backgroundColor: "#ff6666", marginLeft: "1375px", marginTop: "270px", fontSize:"32px", boxShadow: "10px 10px"}}>
                    <p style={{margin: "15px"}}>Hey! This is Songify, a user-driven social platform that provides a means of sharing music.</p>
                </div>
                <div className="about-bottom-half" style={{display: "flex", color: "black", backgroundColor: "#fffff0", height: "50%"}}>
                    <div className="who-we-are" style={{flex: "33.3%", textAlign: "left", marginTop: "100px", marginLeft: "150px"}}>
                        <WhoWeAreLogo style={{height: "4em"}}/>
                        <h1>Who We Are</h1>
                        <hr style={{marginLeft: "0px", border: "3px solid #ff6666", maxWidth: "100px"}}></hr>
                        <p style={{maxWidth: "250px"}}>Songify was founded and created by solo developer <b>Justin McArthur</b> in August, 2021. <br /> 
                        Justin wanted Songify to be a team of <b>like-minded people</b>, within a culture that promoted a mindset of <b>growth</b> and <b>communication</b>.</p>
                    </div>
                    <div className="who-we-are" style={{flex: "33.3%", marginTop: "100px", marginRight: "100px"}}>
                        <HeadphoneLogo style={{height: "4em"}}/>
                        <h1>What We Are</h1>
                        <hr style={{marginLeft: "0px", border: "3px solid #ff6666", maxWidth: "100px"}}></hr>
                        <p style={{maxWidth: "250px"}}>We are a <b>social media</b> website where a user can <b>post</b> their current favorite (or most hated) song to their friends, as well as <b>take a quiz</b> to determine the best song for you at the moment.</p>
                    </div>
                    <div className="who-we-are" style={{flex: "33.3%", marginRight: "150px", marginTop: "100px"}}>
                        <ThumbLogo style={{height: "4em"}}/>
                        <h1>Why You Should Choose Us</h1>
                        <hr style={{marginLeft: "0px", border: "3px solid #ff6666", maxWidth: "100px"}}></hr>
                        <p style={{maxWidth: "250px"}}>Not only would you be supporting a <b>poor, underpaid, and overworked development team</b>, but you'd also have access to an unparalleled <b>song-matching algorithm</b> that can return one of thousands of songs that will be <b>EXACTLY</b> what you need to hear.</p>
                    </div>
                </div>
            </div>
    )
}

export default About
