import React from 'react'

function Feed( { postCollection } ) {
    return (
        <div className="feed-div">
            <div className="feed-posts" style={{display: "grid", gridTemplateColumns: "repeat(2, 500px)", gridRowGap: "48px", justifyContent: "space-around"}}>
                {postCollection.map(post => 
                <div key={post.id} style={{border: "1px solid black"}}>
                    <img src={post.user.profile_pic_url} style={{maxLength: "100px", maxHeight: "100px"}}/>
                    <h1>{post.user.username}</h1>
                    <h3>{post.thoughts}</h3>
                </div>)}
            </div>
        </div>
    )
}

export default Feed
