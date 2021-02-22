import React from 'react'
import { Avatar, IconButton } from "@material-ui/core";
import './MessageSender.css'
import VideocamSharp from "@material-ui/icons/VideocamSharp";
import PhotoLibrary from "@material-ui/icons/PhotoLibrary";
import InsertEmoticon from "@material-ui/icons/InsertEmoticon";
const MessageSender = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className="messageSender">
      <div className="messageSender_top">
        <Avatar />
        <form>
          <input
            className="messageSender_input"
            type="text"
            placeholder="What's on your mind? "
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Submit{" "}
          </button>
        </form>
      </div>
      <div className="messageSender_bottom">
        <div className="messageSender_option">
          <VideocamSharp style={{ color: "red" }} />
          <h3>Live Server</h3>
        </div>
        <div className="messageSender_option">
          <PhotoLibrary style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender_option">
          <InsertEmoticon style={{ color: "yellow" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender
