import './App.css';
import {Provider, useDispatch, useSelector} from "react-redux" 
import {store} from "./store"

function App() {
  //Always gonna use useDispatch
  const dispatch = useDispatch();

  //Declare variables here that represent initial state in the reducer file  
  const usernameInput = useSelector(state => state.usernameInput);
  const passwordInput = useSelector(state => state.passwordInput);

  //dispatch always takes two arguments, the type which determines the case in reducer
  //and the payload which is essentially what you're using to modify that state
  const handleUsernameChange = (e) => {
    dispatch({
      type: "CHANGE_USERNAME_INPUT",
      payload: e.target.value
    })
  }

  const handlePasswordChange = (e) => {
    dispatch({
      type: "CHANGE_PASSWORD_INPUT",
      payload: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(usernameInput, passwordInput)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleUsernameChange} type="text"></input>
      <input onChange={handlePasswordChange} type="text"></input>
      <input type="submit"></input>
    </form>
  );
}

export default (() => (
  <Provider store={store}>
    <App />
  </Provider>
));
