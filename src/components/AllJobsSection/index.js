import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import JobCard from '../JobCard'
import './index.css'
import NoJobsFound from '../NoJobsFound'

class AllJobsSection extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: '',
      jobsList: [],
      apiStatus: 'INITIAL',
    }
  }

  componentDidMount() {
    this.getProducts()
  }

  onChangeInput = event => {
    this.setState({inputValue: event.target.value})
  }

  filterJobList = () => {
    const {jobsList, inputValue} = this.state
    const filteredList = jobsList.filter(each =>
      each.title.toLowerCase().includes(inputValue.toLowerCase()),
    )
    this.setState({jobsList: filteredList, inputValue: ''})
  }

  getProducts = async () => {
    const {activeRange, activeType} = this.props
    console.log(activeRange)
    this.setState({
      apiStatus: 'LOADING',
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/jobs?employement_type=${activeRange}&minimum_package=${activeType}&search=`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.jobs.map(job => ({
        companyLogoUrl: job.company_logo_url,
        employmentType: job.employment_type,
        id: job.id,
        jobDescription: job.job_description,
        location: job.location,
        packagePerAnnum: job.package_per_annum,
        rating: job.rating,
        title: job.title,
      }))
      this.setState({
        jobsList: updatedData,
        apiStatus: 'SUCCESS',
      })
    } else if (response.status === 401) {
      this.setState({apiStatus: 'FAILURE'})
    }
  }

  renderSuccessView = () => {
    const {jobsList} = this.state
    const lengthh = jobsList.length
    return (
      <>
        <div>
          <input type="search" onChange={this.onChangeInput} />
          <button type="button" onClick={this.filterJobList}>
            search
          </button>
        </div>
        <ul className="jobs-list">
          {lengthh > 1 &&
            jobsList.map(job => <JobCard jobData={job} key={job.id} />)}
          {lengthh < 1 && <NoJobsFound />}
        </ul>
      </>
    )
  }

  renderLoader = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <div className="failure">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
          alt="failure view"
        />
        <h1>Oops! Something Went Wrong</h1>
        <p>we cannot seem to find the page you are looking for.</p>
        <button type="button">Retry</button>
      </div>
    </div>
  )

  render() {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case 'LOADING':
        return this.renderLoader()
      case 'SUCCESS':
        return this.renderSuccessView()
      case 'FAILURE':
        return this.renderFailureView()
      default:
        return null
    }
  }
}

export default AllJobsSection
