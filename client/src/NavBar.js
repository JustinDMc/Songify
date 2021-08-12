import React from 'react'
import { Navbar } from "./styled";
import { Logo } from "./styled"
import {NavLink} from "react-router-dom"

function NavBar() {

    return (
        <div className="Navbar-Div">
            <Navbar style={{display: "flex", margin: "0px"}}>
                <div className="logo/name" style={{flex: "20%", textAlign: "left", marginLeft: "40px"}}> 
                    <h1 className="header" style={{color: "white", margin: "0px"}}
                    > <Logo /> deMEstify </h1> 
                </div>
                <div className="NavLinks" style={{flex: "80%", textAlign: "right", marginRight: "40px"}}>
                    <NavLink exact to="/about">About</NavLink>
                    <NavLink exact to="/">Login</NavLink>
                    <NavLink exact to="/signup">Signup</NavLink>
                    <NavLink exact to="/home">Home</NavLink>
                    <NavLink exact to="/feed">Feed</NavLink>
                </div>
            </Navbar>
        </div>
    )
}

export default NavBar
