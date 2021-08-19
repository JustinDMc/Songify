import './App.css';
import React,{ useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import {Provider, useDispatch, useSelector} from "react-redux"; 
import { useHistory } from "react-router-dom";
import {store} from "./store";
import NavBar from "./NavBar"
import About from "./About";
import Signup from "./Signup"
import Login from "./Login"
import Feed from "./Feed";
import Home from "./Home";
import PostPage from './PostPage';
import PostThoughts from "./PostThoughts"

function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState([]);
  const [songCollection, setSongCollection] = useState([]);
  const [commentCollection, setCommentCollection] = useState([]);
  const [userCollection, setUserCollection] = useState([]);
  const [allPosts, setAllPosts] = useState([])

  useEffect(() => {
    fetch("/songs")
    .then(res => res.json())
    .then(data => setSongCollection(data))
  }, [])

  useEffect(() => {
    fetch("/posts")
    .then(res => res.json())
    .then(data => setAllPosts(data))
  }, [])

  useEffect(() => {
    fetch("/users")
    .then(res => res.json())
    .then(data => setUserCollection(data))
  }, [])

  useEffect(() => {
    fetch("/comments")
    .then(res => res.json())
    .then(data => setCommentCollection(data))
  }, [])

  console.log(allPosts)

  return (
    <div className="App">
      <Switch>
        <Route exact path ="/">
          <NavBar />
          <Login setCurrentUser={setCurrentUser}/>
        </Route>
        <Route exact path ="/signup">
          <NavBar />
          <Signup setCurrentUser={setCurrentUser}/>
        </Route>
        <Route exact path ="/about">
          <NavBar />
          <About />
        </Route>
        <Route exact path ="/home">
          <NavBar />
          <Home />
        </Route>
        <Route exact path ="/post_page">
          <NavBar />
          <PostPage setAllPosts={setAllPosts} allPosts={allPosts} songCollection={songCollection} history={history}/>
        </Route>
        {/* <Route exact path ="/post_thoughts">
          <NavBar />
          <PostThoughts />
        </Route> */}
        <Route exact path ="/feed">
          <NavBar />
          <Feed commentCollection={commentCollection} userCollection={userCollection} allPosts={allPosts}/>
        </Route>
      </Switch>
    </div>
  );
}

export default 
(() => (
  <Provider store={store}>
    <App />
  </Provider>
));
