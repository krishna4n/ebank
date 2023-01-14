import './index.css'

const NavBar = props => {
  const {logoutClicked} = props

  const onClickLogout = () => {
    logoutClicked()
  }

  return (
    <div className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png "
        alt="website logo"
        className="website-logo"
      />
      <button type="button" className="logout-button" onClick={onClickLogout}>
        Logout
      </button>
    </div>
  )
}
export default NavBar
