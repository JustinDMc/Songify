import React, { useState, useEffect } from 'react'
import { HeartLogo } from "./styled"
import { CommentLogo } from "./styled"
import { DotsLogo } from "./styled"
// import {useDispatch, useSelector} from "react-redux" 

function Feed( { postCollection, userCollection } ) {
    //Always gonna use useDispatch
    // const dispatch = useDispatch();
    // const postLikes = useSelector(state => state.postLikes);

    // const addLike = (e) => {
    //     dispatch({
    //     type: "INCREMENT_LIKES",
    //     payload: postLikes + 1
    //   })
    // }


    // const [commentCollection, setCommentCollection] = useState([]);

    // useEffect(() => {
    //     fetch("/comments")
    //     .then(res => res.json())
    //     .then(commentData => setCommentCollection(commentData))
    // }, [])

    const lastComment = [...postCollection.map(post => post.comments)].pop();
    console.log(lastComment)

    const [newComment, setNewComment] = useState("")

    const [liked, setLiked] = useState(<HeartLogo style={{color: "white", height: "30px"}}/>)

    const likeButton = () => {
        setLiked(<HeartLogo style={{color: "#ff6666", height: "30px"}}/>)
    }

    const commentIcon = <CommentLogo style={{color: "white", height: "30px"}}/>

    const [commentSection, setCommentSection] = useState(false)

    const commentButton = () => {
        setCommentSection(!commentSection)
    }



    async function handleCommentSubmit(e) {
        // e.preventDefault();
        const comment = {
            user_id: 1,
            post_id: 1, 
            content: newComment
        }
        fetch(`/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({comment})
        })
    }

    return (
        // Entire page
        <div className="feed-div">

            {/* Div of all the posts in the feed */}
            <div className="feed-posts" style={{display: "grid", gridTemplateColumns: "repeat(1, 900px)", gridRowGap: "48px", justifyContent: "space-around", color:"white"}}>

                {/* Each individual post */}
                {postCollection.map(post => 
                <div key={post.id} style={{border: "4px solid black", borderRadius: "8px", backgroundColor: "#000000", opacity: "90%", marginBottom: "15px", marginTop: "15px"}}>
                    <img src={post.user.profile_pic_url} style={{maxLength: "50px", maxHeight: "50px", marginLeft: "15px", marginTop: "10px", borderRadius: "50%"}} />
                    <label style={{fontSize: "18px", fontWeight: "bold"}}>{post.user.username}</label>

                    {/* Each post's song information */}
                    <div className="post-song-content" style={{textAlign: "center", backgroundColor: "#808080", maxWidth: "350px", minHeight: "350px", borderRadius: "12px", marginLeft: "32%"}}>
                        <img src={post.song.album_img_url} style={{maxLength: "225px", maxHeight: "225px", marginTop: "15px"}}/>
                        <h5 style={{color: "black"}}>{post.song.title}</h5>   
                        <h5 style={{color: "black"}}>{post.song.artist}</h5>   
                    </div>

                    <br></br>
                    <br></br>

                    {/* Heart and Comment Icons */}
                    <label style={{marginLeft: "15px"}} onClick={likeButton}>{liked}</label>
                    <label style={{marginLeft: "25px"}} onClick={commentButton}>{commentIcon}</label>
                    <p style={{marginLeft: "15px"}}>{post.likes} likes</p>

                    {/* User's content in post */}
                    <h4 style={{marginLeft: "15px"}}><b style={{fontSize: "20px"}}>{post.user.username}: </b>{post.thoughts}</h4>

                    <DotsLogo style={{height: "30px", marginLeft: "15px", marginBottom: "20px"}}/>

                    <br></br>
                    <br></br>

                    {/* Comment Section */}
                    {commentSection ? 
                    <div style={{textAlign: "center"}}>
                        {post.comments.map(comment => 
                            <h3 style={{textAlign: "left", marginLeft: "15px", marginTop: "-25px", marginBottom: "40px"}}>
                             
                                <img style={{maxLength: "25px", maxHeight: "25px", borderRadius: "50%"}} src={userCollection.filter(user => user.id == comment.user_id).map(user => user.profile_pic_url)}/>
                               
                                {userCollection.filter(user => user.id == comment.user_id).map(user => user.username)}: {comment.content}</h3> 
                        )}
                        <form style={{textAlign: "center"}}onSubmit={handleCommentSubmit}>
                        <img style={{maxLength: "25px", maxHeight: "25px", borderRadius: "50%"}} src={userCollection.filter(user => user.id == 1).map(user => user.profile_pic_url)}/>
                        <input 
                        style={{marginBottom: "10px", marginLeft:"5px", borderRadius: "8px", height: "25px"}}
                        type="text" 
                        placeholder="Leave a comment..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}>    
                        </input>
                        <label style={{marginLeft: "5px"}}><input type="submit"></input></label>
                    </form>
                    </div>
                    : 
                    <div>
                    {post.comments.map(comment => 
                        <h4 style={{textAlign: "left", marginLeft: "15px", marginTop: "-25px", marginBottom: "40px"}}>

                            <b style={{fontSize: "20px"}}>{userCollection.filter(user => user.id == comment.user_id).map(user => user.username)}</b>: {comment.content}</h4> 
                    )}
                    <form style={{textAlign: "center"}}onSubmit={handleCommentSubmit}>
                    <img style={{maxLength: "25px", maxHeight: "25px", borderRadius: "50%"}} src={userCollection.filter(user => user.id == 1).map(user => user.profile_pic_url)}/>
                    <input 
                    style={{marginBottom: "10px", marginLeft:"5px", borderRadius: "8px", height: "25px"}}
                    type="text" 
                    placeholder="Leave a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}>    
                    </input>
                    <label style={{marginLeft: "5px"}}><input type="submit"></input></label>
                </form>
                </div>}
                </div>)}
            </div>
        </div>
    )
}

export default Feed;
// {commentToggle ? 
//     <div>
//        {postCollection.map(post =>
//         <h3>{post.comments}</h3> )} 
//     </div>
//     :
//     null}