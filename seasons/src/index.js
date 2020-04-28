import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

class App extends React.Component {
    state = {
        lat: null,
        errorMessage: ''
    };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude })
            },
            (error) => {
                this.setState({ errorMessage: error.message });
            }
        );
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: { this.state.errorMessage }</div>;
        }
        else if (!this.state.errorMessage && this.state.lat) {
            return <div><SeasonDisplay lat={this.state.lat} /></div>;
        }
        else {
            return <Loader messagedd="Please accept location request"/>;
        }
    }

    render() {
        return (
            <div style={{border: "5px solid red"}}>
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));