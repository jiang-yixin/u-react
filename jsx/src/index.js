import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText () {
    return 'Click me';
}

const App = () => {
    let buttonText = 'Submit!';
    return (<button style={{ backgroundColor: "blue", color: "white" }}>{getButtonText()}</button>);
};

ReactDOM.render(<App />,document.querySelector('#root'));