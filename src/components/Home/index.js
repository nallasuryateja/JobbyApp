import {withRouter} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = props => {
  const onClickFindJobs = () => {
    const {history} = props
    history.push('/jobs')
  }

  return (
    <>
      <Header />
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
            Find Jobs
          </button>
        </div>
      </div>
    </>
  )
}

export default withRouter(Home)
