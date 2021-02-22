import React from 'react'
import './Feed.css'
import StoryFeel from './../StoryFeel/StoryFeel'
import MessageSender from "./../MessageSender/MessageSender"
import Post from "./../Post/Post";
const Feed = () => {
  return (
    <div className="feed">
      <StoryFeel />
      <MessageSender />
      <Post />
    </div>
  );
}

export default Feed
