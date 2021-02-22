import React from 'react'
import { Avatar, IconButton } from "@material-ui/core";
import './Post.css'
const Post = ({ profilePic, image, username, timestamp, message}) => {
  return (
    <div className="post">
      <div className="post_top">
        <Avatar className="post_avatar" src={profilePic} />
        <div className="post_topInfo">
          <h3>{username}</h3>
          {/* <p>{new Date(timestamp?.toDate()).toUTCString()} </p> */}
        </div>
      </div>
    </div>
  );
}

export default Post
