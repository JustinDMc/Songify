import './App.css';
import React,{ useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import {Provider, useDispatch, useSelector} from "react-redux"; 
import {store} from "./store";
import NavBar from "./NavBar"
import About from "./About";
import Signup from "./Signup"
import Login from "./Login"
import Feed from "./Feed";
import Home from "./Home";
import PostPage from './PostPage';

function App() {
  const [songCollection, setSongCollection] = useState([]);
  const [postCollection, setPostCollection] = useState([]);
  const [commentCollection, setCommentCollection] = useState([]);
  const [userCollection, setUserCollection] = useState([]);

  useEffect(() => {
    fetch("/songs")
    .then(res => res.json())
    .then(data => setSongCollection(data))
  }, [])

  useEffect(() => {
    fetch("/posts")
    .then(res => res.json())
    .then(data => setPostCollection(data))
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

  return (
    <div className="App">
      <Switch>
        <Route exact path ="/">
          <NavBar />
          <Login />
        </Route>
        <Route exact path ="/signup">
          <NavBar />
          <Signup />
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
          <PostPage songCollection={songCollection}/>
        </Route>
        <Route exact path ="/feed">
          <NavBar />
          <Feed postCollection={postCollection}/>
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
