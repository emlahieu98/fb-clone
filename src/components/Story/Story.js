import React from 'react'
import { Avatar, IconButton } from "@material-ui/core";
import './Story.css'
const Story = ({image, profileSrc, title}) => {
  return (
    <div style={{ backgroundImage: `url(${profileSrc})` }} className="story">
      <Avatar className="story_avatar" src={image} />
      <h4>{title}</h4>
    </div>
  );
}

export default Story
