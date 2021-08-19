import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Signup() {
//   const history = useHistory();
//   const [username, setUserName] = useState("");
//   const [password, setPassword] = useState("");

//   async function handleSubmit(e) {
//     //   const history = useHistory();
//       const [username, setUserName] = useState("");
//       const [password, setPassword] = useState("");
        
//       e.preventDefault();
//       const customer = {
//           username:username,
//           password:password,
//           profile_pic_url: profile_pic_url
//       }
//       const res = await fetch(`/users`, { 
//           method: "POST",
//           headers: {
//               "Content-Type": "application/json"
//           },
//           body: JSON.stringify({customer})
//       });
//       const customerData = await res.json();
//       if(res.ok){
//         //   setCurrentUser(customerData)
//           history.push("/home")
//       } else {
//         //   setErrors(customerData.message)
//       }
//   };

  return (
    <div></div>
//       <div style={{textAlign: 'center'}}>
//           <h1 className="Title"style={{backgroundColor: "rgba(153, 43, 29, 0.8)", color: "#262626", margin: "0px"}}>West Coast Slice</h1>
//           <form onSubmit={handleSubmit} style={{backgroundColor: "white", border: '1px solid black', borderRadius: "8px", padding: "8px", width: "300px", padding: "8px", margin: "auto", marginTop: "250px"}}>
//           <h1 style={{color: "#cf3f0a"}}>West Coast Slice!</h1>
//               <h2>Sign up</h2>
//               <TextField size="small" variant="outlined" 
//                   type="text" 
//                   placeholder="Username" 
//                   name="username" 
//                   value={username} 
//                   onChange={(e) => setUserName(e.target.value)}/>
//               <br></br>
//               <br></br>
//               <TextField size="small" variant="outlined" 
//                   type="password" 
//                   placeholder="Password"
//                   name="password"
//                   value={password} 
//                   onChange={(e) => setPassword(e.target.value)}/>
//               <br></br>
//               <br></br>
//               <TextField size="small" variant="outlined" 
//                   type="text" 
//                   placeholder="Address" 
//                   name="home_address" 
//                   value={home_address} 
//                   onChange={(e) => setHomeAddress(e.target.value)}/>
//               <br></br>
                
//               <br></br>
//               <br></br>
//               <Button variant="contained" submit type="submit" value="Sign Up" style={{color: "black", fontWeight: "bold"}}>Sign Up</Button>
//               {errors?errors.map(error => <div>{error}</div>):null}
//           </form>
//       </div>
  )
}

export default Signup
