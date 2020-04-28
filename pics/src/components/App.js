import React from 'react'
import SearchBar from "./SearchBar"
import ImageList from "./ImageList"
import unsplash from "../api/unsplash"

class App extends React.Component {
    state = { images: [] }

    onSearchSubmit = async (term) => {
        /*
        * Macusola
        const response = await proxy160.get('/vod/contents', {
            params: {
                device: 62,
                query: term,
                rating: '!CSA_5'
            }
        })

        this.setState({ vods: response.data.contents })
        */

        const response = await unsplash.get('/search/photos', {
            params: {
                query: term
            }
        })

        this.setState({ images: response.data.results })
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

export default App