import React from 'react'
import "./styles.css";
import {
  MoreHoriz,
  PlaylistAdd,
  Reply,
  ThumbDownAlt,
  ThumbUpAlt,
} from "@material-ui/icons";
import { VideoSmall } from "..";
import { Avatar, Button } from "@material-ui/core";
import videoURL from "../../assets/videos/video.mp4"

const Watch = () => {
  return (
    <div className="watch">
      <div className="watch__wrap">
        <div className="watch__left">
          <video className="watch__video" autoplay controls>
            <source src={videoURL} type="video/mp4" />
          </video>

          <div className="watch__leftBtm">
            <h1 className="watch__title">Video toatle</h1>

            <div className="watch__videoInfo">
              <div className="watch__videoInfoLeft">
                <p className="videothumb__text">123 views •</p>
              </div>

              <div className="watch__videoInfoRight">
                <div className="watch__likeContainer">
                  <div className="watch__likeWrap">
                    <div className="watch__likeBtnContainer color--gray">
                      <ThumbUpAlt className="watch__icon" />
                      <p>15k</p>
                    </div>

                    <div className="watch__likeBtnContainer color--gray">
                      <ThumbDownAlt className="watch__icon" />
                      <p>200</p>
                    </div>
                  </div>

                  <div className="watch__likeDislikes" />
                </div>

                <div className="watch__likeBtnContainer color--gray">
                  <Reply className="watch__icon share-icon" />
                  <p>SHARE</p>
                </div>

                <div className="watch__likeBtnContainer color--gray">
                  <PlaylistAdd className="watch__icon play-addIcon" />
                  <p>SAVE</p>
                </div>

                <div className="watch__likeBtnContainer color--gray">
                  <MoreHoriz className="watch__icon play-addIcon" />
                  <p>SAVE</p>
                </div>
              </div>
            </div>
          </div>

          <div className="watch__details">
            <div className="watch__detailsContainer">
              <div className="videothumb__details watch__avatarWrap">
                <Avatar
                  style={{ cursor: "pointer" }}
                />

                <div className="videothumb__channel">
                  <h1 className="videothumb__title">coolSEM</h1>

                  <p className="videothumb__text watch__subCount">
                    4.85M Subscribers
                  </p>
                </div>
              </div>
              <Button
                className="watch__subBtn"
                color="primary"
                variant="contained"
              >
                SUBSCRIBE
              </Button>
            </div>

            <div className="watch__description">
              <p >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quidem est recusandae natus eos veniam cupiditate beatae laudantium aperiam dolor!
              </p>
              <p
                className="watch__showMore"
              >
                SHOW more
              </p>
            </div>
          </div>
        </div>
        <div className="watch__right">
            <VideoSmall/>
            <VideoSmall/>
            <VideoSmall/>
            <VideoSmall/>
            <VideoSmall/>
        </div>
      </div>
    </div>
  )
}

export default Watch