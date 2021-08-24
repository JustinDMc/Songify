import React, { useState } from 'react'
import Confetti from 'react-confetti'

function QuizResult() {

    const [seconds, setSeconds] = useState(3.4)

    const [seconds2, setSeconds2] = useState(3)

    const timer = () => {
        setSeconds(seconds -1)
    }

    const timer2 = () => {
        setSeconds2(seconds2 - 1)
    }

    return (
        <div onload={setTimeout(timer, 1000)}>
            {seconds > 1 ? 
            <div style={{width: "100vw", height: "90.7vh", backgroundColor: "black", marginTop: "-67px"}}>
                <h1 style={{ fontSize: "100px", color: "white", textAlign: "center", color: "#ff6666", paddingTop: "220px"}}>Determining your song 
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
                <div style={{border: "4px solid black", borderRadius: "8px", backgroundColor: "#000000", opacity: "90%", height: "550px", width: "550px", marginTop: "10%", marginLeft: "38%"}}>
                    <h1 style={{color: "white", textAlign: "center"}}>Cool stuff is gonna go here</h1>
                    <Confetti 
                    onload={setTimeout(timer2, 1000)}
                    width="1900"
                    height="900"
                    numberOfPieces="200"
                    />
                </div>
            }
        </div>
    )
}

export default QuizResult;
