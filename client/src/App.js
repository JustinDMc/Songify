import './App.css';
import React,{ useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import {Provider, useDispatch, useSelector} from "react-redux"; 
import { useHistory } from "react-router-dom";
import {store} from "./store";
import NavBar from "./NavBar"
import NavBar2 from "./NavBar2"
import About from "./About";
import Signup from "./Signup"
import Login from "./Login"
import Feed from "./Feed";
import Home from "./Home";
import PostPage from './PostPage';
import QuizPage from "./QuizPage";
import PostThoughts from "./PostThoughts";
import QuizResult from "./QuizResult";

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
          <NavBar currentUser={currentUser}/>
          <Login setCurrentUser={setCurrentUser}/>
        </Route>
        <Route exact path ="/signup">
          <NavBar currentUser={currentUser}/>
          <Signup setCurrentUser={setCurrentUser}/>
        </Route>
        <Route exact path ="/about">
          <NavBar2 currentUser={currentUser}/>
          <About />
        </Route>
        <Route exact path ="/home">
          <NavBar2 currentUser={currentUser}/>
          <Home />
        </Route>
        <Route exact path ="/quiz_page">
          <NavBar2 currentUser={currentUser}/>
          <QuizPage />
        </Route>
        <Route exact path ="/quiz_result">
          <NavBar2 currentUser={currentUser}/>
          <QuizResult setAllPosts={setAllPosts} allPosts={allPosts} />
        </Route>
        <Route exact path ="/post_page">
          <NavBar2 currentUser={currentUser}/>
          <PostPage setAllPosts={setAllPosts} allPosts={allPosts} songCollection={songCollection} history={history}/>
        </Route>
        {/* <Route exact path ="/post_thoughts">
          <NavBar />
          <PostThoughts />
        </Route> */}
        <Route exact path ="/feed">
          <NavBar2 />
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
