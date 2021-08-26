import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function Login({setCurrentUser}) {
    const history = useHistory();
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
        const user = {
            username:username,
            password,
        }
        const res = await fetch(`/logins`, { 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({user})
        });
        const userData = await res.json();
        if(userData.id) {
            setCurrentUser(userData)
            history.push("/home")
        } else {
            setErrors(<b style={{color: "white"}}>{userData.message}</b>)
        }
    };


    return (
        <div style={{textAlign: "center"}}>
            <form className="login-form" onSubmit={handleSubmit} style={{backgroundColor: "black", opacity: "90%", border: '1px solid black', borderRadius: "8px", padding: "8px", width: "300px", margin: "auto", marginTop: "250px", textAlign: "center"}}>
                <h1 style={{color: "#992b1d"}}>Songify</h1>
                <br></br>
                <h2 style={{color: "white"}}>Login</h2>
                <TextField size="small" variant="outlined" type="text" 
                    style={{backgroundColor: "white"}}
                    placeholder="Username"
                    name="username" 
                    value={username} 
                    onChange={(e) => setUserName(e.target.value)}/>
                <br></br>
                <br></br>
                <TextField size="small" variant="outlined"
                    style={{backgroundColor: "white"}}
                    type="password" 
                    placeholder="Password"
                    name="password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}/>
                    <br></br>
                    <br></br>
                <NavLink to="/signup" style={{fontWeight: "bold", color: "#36a9e3"}}>Sign Up</NavLink>
                <br></br>
                <br></br>
                <Button variant="contained" submit type="submit" value="Log In" style={{color: "black", fontWeight: "bold"}}>Login</Button>
                <div>{errors}</div>
            </form>
        </div>
    )
}

  //Always gonna use useDispatch
  // const dispatch = useDispatch();

  //Declare variables here that represent initial state in the reducer file  

  // const usernameInput = useSelector(state => state.usernameInput);
  // const passwordInput = useSelector(state => state.passwordInput);

  //dispatch always takes two arguments, the type which determines the case in reducer
  //and the payload which is essentially what you're using to modify that state

  // const handleUsernameChange = (e) => {
  //   dispatch({
  //     type: "CHANGE_USERNAME_INPUT",
  //     payload: e.target.value
  //   })
  // }

  // const handlePasswordChange = (e) => {
  //   dispatch({
  //     type: "CHANGE_PASSWORD_INPUT",
  //     payload: e.target.value
  //   })
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(usernameInput, passwordInput)
  // }


    // <form onSubmit={handleSubmit}>
    //   <input onChange={handleUsernameChange} type="text"></input>
    //   <input onChange={handlePasswordChange} type="text"></input>
    //   <input type="submit"></input>
    // </form>