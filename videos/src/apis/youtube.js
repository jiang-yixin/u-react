import axios from 'axios'

const KEY = 'AIzaSyDVe7hrwi3VdfsdLO5K1ALDRyQYWKE15pk'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: KEY,
    maxResults: 5,
    part: 'snippet',
    type: 'video'
  }

});