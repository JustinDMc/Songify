import React, { useState } from 'react'
import Post from "./Post"
// import {useDispatch, useSelector} from "react-redux" 

function Feed( { commentCollection, allPosts, userCollection } ) {

    //Always gonna use useDispatch
    // const dispatch = useDispatch();
    // const postLikes = useSelector(state => state.postLikes);

    // const addLike = (e) => {
    //     dispatch({
    //     type: "INCREMENT_LIKES",
    //     payload: postLikes + 1
    //   })
    // }

    return (
        // Entire page
        <div className="feed-div">

            {/* Div of all the posts in the feed */}
            <div className="feed-posts" style={{display: "grid", gridTemplateColumns: "repeat(1, 900px)", gridRowGap: "48px", justifyContent: "space-around", color:"white"}}>

                {/* Each individual post */}
                {[...allPosts].map(post => 
                <Post key={post.id} userCollection={userCollection} post={post} commentCollection={commentCollection}/>)}

            </div>
        </div>
    )
}

export default Feed;

