import {withRouter} from 'react-router-dom'
import Cookie from 'js-cookie'
import NavBar from '../NavBar'
import './index.css'

const Home = props => {
  const logoutClicked = () => {
    const {history} = props
    Cookie.remove('jwt_token')
    history.replace('/ebank/login')
  }

  return (
    <div className="home-container">
      <NavBar logoutClicked={logoutClicked} />
      <div className="home-content-container">
        <h1 className="home-heading">Your Flexibility, Our Excellence</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png "
          alt="digital card"
          className="digital-card"
        />
      </div>
    </div>
  )
}

export default withRouter(Home)
