import {Component} from 'react'
import Cookie from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {loginError: undefined, userId: '', userPin: ''}

  componentDidMount() {
    const {history} = this.props
    const jwtToken = Cookie.get('jwt_token')
    if (jwtToken !== undefined) {
      history.replace('/')
    }
  }

  changeUserId = event => {
    this.setState({
      userId: event.target.value,
    })
  }

  changeUserPin = event => {
    this.setState({
      userPin: event.target.value,
    })
  }

  loginSubmit = async event => {
    event.preventDefault()
    const {history} = this.props
    const {userId, userPin} = this.state
    const userDetails = {user_id: userId, pin: userPin}

    const loginApiUrl = 'https://apis.ccbp.in/ebank/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    console.log(userDetails)
    const response = await fetch(loginApiUrl, options)
    console.log(response)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      const jwtToken = data.jwt_token
      Cookie.set('jwt_token', jwtToken, {expires: 30})
      history.replace('/')
    } else {
      this.setState({
        loginError: data.error_msg,
      })
    }
  }

  render() {
    const {loginError} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png "
            alt="website login"
            className="login-image"
          />

          <div className="login-container">
            <h1 className="login-heading">Welcome Back !</h1>
            <form className="login-form" onSubmit={this.loginSubmit}>
              <label htmlFor="user-id" className="input-label">
                User ID
              </label>
              <input
                type="text"
                className="user-id"
                id="user-id"
                placeholder="Enter User ID"
                onChange={this.changeUserId}
              />
              <label htmlFor="user-pin" className="input-label">
                PIN
              </label>
              <input
                type="password"
                className="user-pin"
                id="user-pin"
                placeholder="Enter PIN"
                onChange={this.changeUserPin}
              />
              <button type="submit" className="login-button">
                Login
              </button>
              {loginError !== undefined && (
                <p className="error-msg">{loginError}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
