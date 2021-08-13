import React from 'react'
// import {useDispatch, useSelector} from "react-redux" 

function Feed( { postCollection } ) {
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
            <div className="feed-posts" style={{display: "grid", gridTemplateColumns: "repeat(2, 500px)", gridRowGap: "48px", justifyContent: "space-around", color: "white"}}>

                {/* Each individual post */}
                {postCollection.map(post => 
                <div key={post.id} style={{border: "1px solid black", borderRadius: "8px", backgroundColor: "black"}}>
                    <img src={post.user.profile_pic_url} style={{maxLength: "100px", maxHeight: "100px", marginLeft: "15px", marginTop: "10px"}}/>
                    <h1 style={{marginLeft: "20px", marginTop: "0px"}}>{post.user.username}</h1>

                    {/* Each post's song information */}
                    <div className="post-song-content" style={{textAlign: "center", backgroundColor: "lightpink", maxWidth: "250px", maxHeight: "250px", borderRadius: "12px"}}>
                        <img src={post.song.album_img_url} style={{maxLength: "125px", maxHeight: "125px", marginTop: "6px"}}/>
                        <h5 style={{color: "black"}}>{post.song.title}</h5>   
                        <h5 style={{color: "black"}}>{post.song.artist}</h5>   
                    </div>

                    {/* User's content in post */}
                    <h3 style={{textAlign: "center"}}>{post.thoughts}</h3>
                    <h5 style={{textAlign: "center"}}>
                        Likes: {post.likes} 
                        <button style={{justifyContent: "center", marginLeft: "4px"}}>Like
                        </button>
                    </h5> 
                 
                </div>)}
            </div>
        </div>
    )
}

export default Feed;
