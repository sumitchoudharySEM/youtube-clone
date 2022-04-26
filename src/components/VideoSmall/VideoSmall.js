import React from 'react'

const VideoSmall = () => {
  return (
    <div className="videoSmall">
       <div className='videoSmall__left'>
         <img src="https://source.unsplash.com/random" alt="" className="videoSmall__thumbmail" />
       </div>
       <div className="videoSmall__right">
        <p className="videoSmall__title">video title</p>

        <div className="videoSmall__texts videothumb__texts">
          channel name
          <p className="videothumb__text">110k views • time</p>
        </div>
      </div>
    </div>

  )
}

export default VideoSmall