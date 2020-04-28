import { combineReducers } from 'redux'

export const songsReducer = () => {
  return [
    { title: 'Song 1', duration: '4:10' },
    { title: 'Song 2', duration: '4:05' },
    { title: 'Song 3', duration: '3:50' },
    { title: 'Song 4', duration: '4:00' }
  ]
}

export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }

  return selectedSong
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})