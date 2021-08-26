import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Signup( {setCurrentUser } ) {
  const history = useHistory();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicUrl, setProfilePicUrl] = useState("");
  const [errors, setErrors] = useState(null);

  async function handleSubmit(e) {
      e.preventDefault();
      const user = {
          username:username,
          password:password,
          profile_pic_url: profilePicUrl,
      }
      const res = await fetch(`/users`, { 
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({user})
      });
      const userData = await res.json();
      if(userData){
          setCurrentUser(userData)
          history.push("/home")
      } else {
          setErrors(userData.message)
      }
  };

  return (
      <div style={{textAlign: 'center'}}>
          <form onSubmit={handleSubmit} style={{backgroundColor: "black", border: '1px solid black', borderRadius: "8px", padding: "8px", width: "300px", padding: "8px", margin: "auto", marginTop: "250px"}}>
          <h1 style={{color: "#992b1d"}}>Songify</h1>
          <br></br>
              <h2 style={{color: "white"}}>Sign up</h2>
              <TextField size="small" variant="outlined" 
                  type="text" 
                  placeholder="Username" 
                  name="username" 
                  value={username} 
                  style={{backgroundColor: "white"}}
                  onChange={(e) => setUserName(e.target.value)}
                  />
              <br></br>
              <br></br>
              <TextField size="small" variant="outlined" 
                  type="password" 
                  placeholder="Password"
                  name="password"
                  value={password} 
                  style={{backgroundColor: "white"}}
                  onChange={(e) => setPassword(e.target.value)}
                  />
              <br></br>
              <br></br>
              <TextField size="small" variant="outlined" 
                  type="text" 
                  placeholder="Enter your profile pic URL" 
                  name="home_address" 
                  value={profilePicUrl} 
                  style={{backgroundColor: "white"}}
                  onChange={(e) => setProfilePicUrl(e.target.value)}
                  />
              <br></br>
                
              <br></br>
              <br></br>
              <Button variant="contained" submit type="submit" value="Sign Up" style={{color: "black", fontWeight: "bold"}}>Sign Up</Button>
              {/* {errors?errors.map(error => <div>{error}</div>):null} */}
          </form>
      </div>
  )
}

export default Signup
