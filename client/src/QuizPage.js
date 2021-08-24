import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography';
import {NavLink} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import {InfoLogo} from "./styled"

function QuizPage() {

    const [infoHover, setInfoHover] = useState(<InfoLogo style={{height: "18px", paddingTop: "18px", marginLeft: "5px"}}/>)

    const activateinfo = () => {
        setInfoHover(<InfoLogo style={{color: "blue", height: "18px", paddingTop: "18px", marginLeft: "5px"}}/>)
    }

    const deactivateinfo = () => {
        setInfoHover(<InfoLogo style={{height: "18px", paddingTop: "18px", marginLeft: "5px"}}/>)
    }

    const marks = [
        {
          value: 1,
          label: "Very Bad",
        },
        {
          value: 2,
          label: "Bad",
        },
        {
          value: 3,
          label: 'Fine',
        },
        {
          value: 4,
          label: 'Good',
        },
        {
            value: 5,
            label: 'Very Good',
        }
      ];


    return (
        <div>
            <div>
                <h1 style={{textAlign: 'center', color: "white", fontSize: "60px"}}>Song Quiz 
                    <label 
                    onMouseEnter={activateinfo}
                    onMouseLeave={deactivateinfo}
                    title="The Song Quiz asks a variety of questions such as personality questions, preference questions, questions about your week, and true/false questions, all in an effort to find the song that is YOU right now.">
                        {infoHover}
                    </label>
                </h1>
                {/* <div style={{width: "500px", height: "200px", backgroundColor: "white", zIndex: 1, marginLeft: "800px"}}>
                </div> */}
            </div>

            <div className="quiz-div" style={{border: "5px solid black", marginLeft: "475px", marginRight: "475px", backgroundColor: "#fffff0", opacity: "90%", height: "600px"}}> 
                    {/* Question 1 */}
                <div className="quiz-question-div" style={{marginTop: "60px"}}>
                    <h1 style={{marginLeft: "100px"}}>Question 1/5</h1>
                    <hr style={{marginLeft: "100px", border: "3px solid #ff6666", maxWidth: "50px"}}></hr>

                    <p style={{marginLeft: "100px"}}>
                    Out of these options, which is your favorite color?
                    </p>
                    
                    <br />

                    {/* Answer 1 */}
                    <label style={{marginLeft: "280px"}}>A)</label>
                    <input type="radio" style={{marginLeft: "5px"}}></input>
                    <label>Blue</label>

                    {/* Answer 2 */}
                    <label style={{marginLeft: "220px"}}>B)</label>
                    <input type="radio" style={{marginLeft: "9px"}}></input>
                    <label>Red</label>

                    <br />
                    <br />

                    {/* Answer 3 */}
                    <label style={{marginLeft: "280px", }}>C)</label>
                    <input type="radio" style={{marginLeft: "5px"}}></input>
                    <label style={{}}>Green</label>

                    {/* Answer 4 */}
                    <label style={{marginLeft: "211px", }}>D) </label>
                    <input type="radio" style={{marginLeft: "0px"}}></input>
                    <label style={{}}>Yellow</label>
                </div>

                <br />
                <br />

                <div className="quiz-question-div">
                    {/* Question 2 */}
                    <h1 style={{marginLeft: "100px"}}>Question 2/5</h1>
                    <hr style={{marginLeft: "100px", border: "3px solid #ff6666", maxWidth: "100px"}}></hr>

                    <p style={{marginLeft: "100px"}}>
                    One being awful and five being AMAZING, how has your week been?
                    </p>

                    <br></br>
                    <br />

                    <Slider
                    defaultValue={3}
                    // valueLabelDisplay="auto"
                    step={1}
                    marks={marks}
                    min={1}
                    max={5}
                    style={{width: "500px", marginLeft: "225px"}}
                    />
                </div>

                <br />
                <br />

                <div className="quiz-question-div">
                    {/* Question 3 */}
                    <h1 style={{marginLeft: "100px"}}>Question 3/5</h1>
                    <hr style={{marginLeft: "100px", border: "3px solid #ff6666", maxWidth: "150px"}}></hr>

                    <p style={{marginLeft: "100px"}}>
                    True/False: I would rather spend my available free time outside adventuring.
                    </p>

                    <br></br>
                    <br />

                    {/* Answer 1 */}
                    <label style={{marginLeft: "280px"}}>A)</label>
                    <input type="radio" style={{marginLeft: "5px"}}></input>
                    <label>True</label>

                    {/* Answer 2 */}
                    <label style={{marginLeft: "220px"}}>B)</label>
                    <input type="radio" style={{marginLeft: "9px"}}></input>
                    <label>False</label>

                </div>

                <br></br>
                <br />

                <div className="quiz-question-div" style={{marginBottom: "20px"}}>
                    {/* Question 4 */}
                    <h1 style={{marginLeft: "100px"}}>Question 4/5</h1>
                    <hr style={{marginLeft: "100px", border: "3px solid #ff6666", maxWidth: "200px"}}></hr>

                    <p style={{marginLeft: "100px"}}>
                    From these available words, which one BEST describes how you would like the <br />rest of your day to go?
                    </p>

                    <br></br>
                    <br />

                    {/* Answer 1 */}
                    <label style={{marginLeft: "250px"}}>A)</label>
                    <input type="radio" style={{marginLeft: "5px"}}></input>
                    <label>Relaxed</label>

                    {/* Answer 2 */}
                    <label style={{marginLeft: "220px"}}>B)</label>
                    <input type="radio" style={{marginLeft: "9px"}}></input>
                    <label>Productive</label>

                    <br />
                    <br />

                    {/* Answer 3 */}
                    <label style={{marginLeft: "250px", }}>C)</label>
                    <input type="radio" style={{marginLeft: "5px"}}></input>
                    <label style={{}}>Introspective</label>

                    {/* Answer 4 */}
                    <label style={{marginLeft: "162px", }}>D) </label>
                    <input type="radio" style={{marginLeft: "0px"}}></input>
                    <label style={{}}>Wild</label>

                </div>

                <br />
                <br />

                <div className="quiz-question-div" style={{marginBottom: "20px"}}>
                    {/* Question 5 */}
                    <h1 style={{marginLeft: "100px"}}>Question 5/5</h1>
                    <hr style={{marginLeft: "100px", border: "3px solid #ff6666", maxWidth: "250px"}}></hr>

                    <p style={{marginLeft: "100px"}}>
                    True/False: I got plenty of sleep over the last three weeks.
                    </p>

                    <br></br>
                    <br />

                    {/* Answer 1 */}
                    <label style={{marginLeft: "280px"}}>A)</label>
                    <input type="radio" style={{marginLeft: "5px"}}></input>
                    <label>True</label>

                    {/* Answer 2 */}
                    <label style={{marginLeft: "220px"}}>B)</label>
                    <input type="radio" style={{marginLeft: "9px"}}></input>
                    <label>False</label>

                </div>


                <br />
                <br />

                <Button variant="contained" submit type="submit" value="button" style={{color: "white", fontWeight: "bold", marginLeft: "41%", backgroundColor: "green", marginBottom: "20px"}}>
                    <NavLink style={{color: "white", textDecoration: "none"}}exact to="/quiz_result">Get My Result!</NavLink>
                </Button>

            </div>
        </div>
    )
}

export default QuizPage
