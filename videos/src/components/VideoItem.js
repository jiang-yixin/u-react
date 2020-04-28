import React from 'react'
import './VideoItem.css'

const VideoItem = (props) => {
  const snippet = props.video.snippet

  return (
    <div onClick={() => {props.onVideoClick(props.video)}} className="video-item item">
      <img src={snippet.thumbnails.medium.url} alt={snippet.title}/>
      <div className="content">
        <div><h4>{snippet.title}</h4></div>
      </div>
    </div>
  )
}

export default VideoItem