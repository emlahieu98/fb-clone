import React from 'react'
import './Feed.css'
import StoryFeel from './../StoryFeel/StoryFeel'
import MessageSender from "./../MessageSender/MessageSender"
const Feed = () => {
  return (
    <div className="feed">
      <StoryFeel />
      <MessageSender />
    </div>
  )
}

export default Feed
