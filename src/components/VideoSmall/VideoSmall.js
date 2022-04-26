import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./styles.css";

const VideoSmall = ({channelView =false}) => {
  const navigate = useNavigate();
  const handleClickRedirect = () => navigate({ pathname: '/watch' }, { replace: true });
  return (
    <div onClick={handleClickRedirect} className={`videoSmall ${channelView && "videoSmall__channelView"}`}>
       <div className='videoSmall__left'>
         <img src="https://source.unsplash.com/random" alt="" className={`videoSmall__thumbmail ${channelView && "videoSmall__channelView__img"}`} />
       </div>
       <div className="videoSmall__right">
        <p className="videoSmall__title">video title</p>

        <div className="videoSmall__texts videothumb__texts">
          {!channelView &&(
            <p className="videothumb__text">channel name</p>
          )}
          <p className="videothumb__text">110k views • time</p>
        </div>
      </div>
    </div>

  )
}

export default VideoSmall