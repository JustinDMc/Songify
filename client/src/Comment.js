// import React, {useState} from 'react'

// function Comment( { postCollection, userCollection } ) {
//     const [newComment, setNewComment] = useState("")

//     async function handleCommentSubmit(e) {
//         // e.preventDefault();
//         const comment = {
//             user_id: 1,
//             post_id: 1, 
//             content: newComment
//         }
//         fetch(`/comments`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({comment})
//         })
//     }

//     return (
//         <div>
//             {postCollection.map(post => 
//             <div style={{textAlign: "center"}}>
//                 <hr></hr>
//                 <h3 style={{textAlign: "center"}}>Comments</h3>
//                 {post.comments.map(comment => 
//                     <h4 style={{textAlign: "left", marginLeft: "15px", marginTop: "-25px", marginBottom: "40px"}}>
//                         {/* Picture of comment user */}
//                         <img style={{maxLength: "25px", maxHeight: "25px", borderRadius: "50%"}} src={userCollection.filter(user => user.id == comment.user_id).map(user => user.profile_pic_url)}/>
//                         {/* Username and comment content */}
//                         {userCollection.filter(user => user.id == comment.user_id).map(user => user.username)}: {comment.content}</h4>
//                 )}
//                 <form onSubmit={handleCommentSubmit}>
//                 <input 
//                 style={{marginBottom: "5px", borderRadius: "8px", height: "25px"}}
//                 type="text" 
//                 placeholder="Leave a comment..."
//                 value={newComment}
//                 onChange={(e) => setNewComment(e.target.value)}>    
//                 </input>
//                 <label><input type="submit"></input></label>
//                 </form>
//             </div>
//             )}
//         </div>
//     )
// }

// export default Comment
