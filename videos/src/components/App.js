import React from 'react'
import SearchBar from "./SearchBar"
import youtube from "../apis/youtube"
import VideoList from "./VideoList"
import VideoDetail from "./VideoDetail"

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  onSearchBarSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
  }

  onVideoClick = (video) => {
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchBarSubmit} />
        <div className="ui grid">
          <div className="eleven wide column">
            <VideoDetail video={this.state.selectedVideo}/>
          </div>
          <div className="five wide column">
            <VideoList onVideoClick={this.onVideoClick} videos={this.state.videos} />
          </div>
        </div>
      </div>
    )
  }
}

export default App