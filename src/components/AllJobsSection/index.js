import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import JobCard from '../JobCard'
import './index.css'

class AllJobsSection extends Component {
  constructor(props) {
    super(props)
    const {checkedItem} = this.props
    this.state = {
      jobsList: [],
      isLoading: false,
      inputValue: '',
      isChecked: false,
      checkedItem,
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
    this.setState({
      isLoading: true,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/jobs'
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
        isLoading: false,
      })
    }
  }

  checkedList = () => {
    const {checkedItem, jobsList} = this.state
    console.log(checkedItem)
    console.log(jobsList)
    const lengthh = checkedItem.length
    console.log(lengthh)
    if (lengthh > 1) {
      this.setState({isChecked: true})
    }
    const v = jobsList.map(each => each.employmentType === checkedItem)
    console.log(v)
    this.setState({jobsList: v})
  }

  renderProductsList = () => {
    const {jobsList, isChecked} = this.state
    return (
      <>
        <h1 className="products-list-heading">All Products</h1>
        <ul className="products-list">
          {isChecked &&
            jobsList.map(job => <JobCard jobData={job} key={job.id} />)}
          {!isChecked &&
            jobsList.map(job => <JobCard jobData={job} key={job.id} />)}
        </ul>
      </>
    )
  }

  renderLoader = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <>
        <div>
          <input type="search" onChange={this.onChangeInput} />
          <button type="button" onClick={this.filterJobList}>
            search
          </button>
        </div>

        {isLoading ? this.renderLoader() : this.renderProductsList()}
      </>
    )
  }
}

export default AllJobsSection
