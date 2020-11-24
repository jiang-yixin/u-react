import React from 'react'
import { connect } from 'react-redux'

const SongDetail = (props) => {
  if (!props.song) {
    return (
      <div>
        <h3>{props.song.title}</h3>
        <p>{props.song.duration}</p>
      </div>
    )
  }
  else {
    return <div></div>
  }
}

const mapStateToProps = (state) => {
  //console.log(state)
  return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail)