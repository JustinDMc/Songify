import React, { useState, useEffect } from 'react';
import { HeartLogo } from "./styled";
import { CommentLogo } from "./styled";
import { DotsLogo } from "./styled";
import ReactPlayer from "react-player";

function Post( { commentCollection, userCollection, post } ) {
    const [newComment, setNewComment] = useState("")

    const [liked, setLiked] = useState(<HeartLogo style={{color: "white", height: "30px"}}/>)

    const likeButton = () => {
        setLiked(<HeartLogo style={{color: "#ff6666", height: "30px"}}/>)
        setLikeNumber(post.likes + 1)
    }

    const commentIcon = <CommentLogo style={{color: "white", height: "30px"}}/>

    const [commentSection, setCommentSection] = useState(false)

    const commentButton = (e) => {
        setCommentSection(!commentSection)
    }

    const [likeNumber, setLikeNumber] = useState(post.likes)

    const [postComments, setPostComments] = useState(commentCollection)

    async function handleCommentSubmit(e) {
        e.preventDefault();
        const comment = {
            user_id: 1,
            post_id: post.id, 
            content: newComment
        }
        const res = await fetch(`/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(comment)
        });
        const commentData = await res.json();
        if(res.ok) {
            setPostComments([...postComments, comment])
            setNewComment("")
        }
    }


    return (
        <div>
            <div key={post.id} style={{border: "4px solid black", borderRadius: "8px", backgroundColor: "#000000", opacity: "90%", marginBottom: "15px", marginTop: "15px"}}>
                <img src={post.user.profile_pic_url} style={{maxLength: "50px", maxHeight: "50px", marginLeft: "15px", marginTop: "10px", borderRadius: "50%"}} />
                <label className="postUserName"style={{fontSize: "18px", fontWeight: "bold"}}>{post.user.username}</label>

                {/* Each post's song information */}
                <div className="post-song-content" style={{textAlign: "center", backgroundColor: "#808080", maxWidth: "350px", minHeight: "350px", borderRadius: "12px", marginLeft: "32%", border: "5px solid white"}}>
                    <ReactPlayer style={{maxWidth: "75px", maxHeight: "125px", position: "relative"}} url="https://soundcloud.com/justinbieber/yummy-1" playicon/>
                    <img src={post.song.album_img_url} style={{maxLength: "225px", maxHeight: "225px", marginTop: "15px"}}/>
                    <h4 style={{color: "black"}}>{post.song.title}</h4>   
                    <h4 style={{color: "black"}}>{post.song.artist}</h4>   
                </div>

                <br></br>
                <br></br>

                {/* Heart and Comment Icons */}
                <label style={{marginLeft: "15px"}} onClick={likeButton}>{liked}</label>
                <label style={{marginLeft: "25px"}} onClick={commentButton}>{commentIcon}</label>
                <p style={{marginLeft: "15px"}}>{likeNumber} likes</p>

                {/* User's content in post */}
                <h4 style={{marginLeft: "15px"}}><b style={{fontSize: "20px"}}>{post.user.username}: </b>{post.thoughts}</h4>

                <DotsLogo style={{height: "30px", marginLeft: "15px", marginBottom: "20px"}}/>

                <br></br>
                <br></br>

                {/* Comment Section */}
                {commentSection ? 
                <div style={{textAlign: "center"}}>
                    {postComments.filter(comment => comment.post_id == post.id).map(comment => 
                        <h3 style={{textAlign: "left", marginLeft: "15px", marginTop: "-25px", marginBottom: "40px"}}>
                            <img style={{maxLength: "25px", maxHeight: "25px", borderRadius: "50%"}} src={userCollection.filter(user => user.id == comment.user_id).map(user => user.profile_pic_url)}/>
                            {userCollection.filter(user => user.id == comment.user_id).map(user => user.username)}: {comment.content}
                        </h3> 
                    )}
                    <form style={{textAlign: "center"}} onSubmit={handleCommentSubmit}>
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
                {postComments.filter(comment => comment.post_id == post.id).map(comment => 
                    <h3 style={{textAlign: "left", marginLeft: "15px",  marginTop: "-25px", marginBottom: "40px"}}>      
                        {userCollection.filter(user => user.id == comment.user_id).map(user => user.username)}: {comment.content}
                    </h3> 
                )}
            </div>}
            </div>
        </div>
    )
}

export default Post;
