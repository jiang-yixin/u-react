import React from 'react'

class GoogleAuth extends React.Component {
  state = { isSignedIn: null }
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '50929190616-pp129jd5udrqtrekoeisbkvppbnclpb9.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance()
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
      })
    })
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>Not sure</div>
    } else if (this.state.isSignedIn) {
      return <div>I'm signed in</div>
    } else {
      return <div>I'm not signed in</div>
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>
  }
}

export default GoogleAuth