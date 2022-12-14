import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const Home = props => {
  const onClickLogout = () => {
    const {history} = props

    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const onClickLogo = () => {
    const {history} = props
    history.replace('/')
  }

  const onClickFindJobs = () => {
    const {history} = props
    history.push('/jobs')
  }

  return (
    <>
      <div>
        <nav className="nav-header">
          <div className="nav-content">
            <div className="nav-bar-mobile-logo-container">
              <button
                className="logo-button"
                type="button"
                onClick={onClickLogo}
              >
                <Link to="/">
                  <img
                    className="website-logo"
                    src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
                    alt="website logo"
                  />
                </Link>
              </button>

              <button
                type="button"
                className="nav-mobile-btn"
                onClick={onClickLogout}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
                  alt="nav logout"
                  className="nav-bar-img"
                />
              </button>
            </div>

            <div className="nav-bar-large-container">
              <button
                className="logo-button"
                type="button"
                onClick={onClickLogo}
              >
                <img
                  className="website-logo"
                  src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
                  alt="website logo"
                />
              </button>
              <ul className="nav-menu">
                <li className="nav-menu-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>

                <li className="nav-menu-item">
                  <Link to="/jobs" className="nav-link">
                    Jobs
                  </Link>
                </li>
              </ul>
              <button
                type="button"
                className="logout-desktop-btn"
                onClick={onClickLogout}
              >
                Logout
              </button>
            </div>
          </div>
          <div className="nav-menu-mobile">
            <ul className="nav-menu-list-mobile">
              <li className="nav-menu-item-mobile">
                <Link to="/" className="nav-link">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                    alt="nav home"
                    className="nav-bar-img"
                  />
                </Link>
              </li>

              <li className="nav-menu-item-mobile">
                <Link to="/products" className="nav-link">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                    alt="nav products"
                    className="nav-bar-img"
                  />
                </Link>
              </li>
              <li className="nav-menu-item-mobile">
                <Link to="/cart" className="nav-link">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                    alt="nav cart"
                    className="nav-bar-img"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading">Find The Job that Fits your Life</h1>

          <p className="home-description">
            Millions of People are Searching for jobs, salary
            information,company reviews.Find the job that fits your abilities
            and potential
          </p>
          <button
            type="button"
            className="shop-now-button"
            onClick={onClickFindJobs}
          >
            <Link to="/jobs">Find Jobs</Link>
          </button>
        </div>
      </div>
    </>
  )
}

export default withRouter(Home)
