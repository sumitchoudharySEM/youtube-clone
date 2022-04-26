import { Avatar } from "@material-ui/core";
import React from "react";
import "./styles.css";
import {useNavigate} from "react-router-dom";

const VideoThumb = () => {
  const navigate = useNavigate();
  const handleThumbclick = () => navigate({ pathname: '/watch' }, { replace: true });
  const handleAvatarclick = () => navigate({ pathname: '/PreviewChannel' }, { replace: true });
  return (
    <div className="videothumb">
      <img
      onClick={handleThumbclick}
        src="https://source.unsplash.com/random"
        alt=""
        className="videothumb__thumbnail"
      />

      <div className="videothumb__details">
        <Avatar onClick={handleAvatarclick}/>
        <div className="videothumb__channel">
          <h1 className="videothumb__title">create a youtube clone</h1>
          <div className="videothumb__texts">
            <p className="videothumb__text">coolsem</p>
            <p className="videothumb__text">123 views .10 hours ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoThumb;
