import {Component} from 'react'
/* import Cookies from 'js-cookie' */
import Header from '../Header'
import JobbyCard from '../JobbyCard'
import TypeOfEmployment from '../TypeOfEmployment'
import SalaryRange from '../SalaryRange'
/* import JobCard from '../JobCard' */
/* import NoJobsFound from '../NoJobsFound' */
import AllJobsSection from '../AllJobsSection'
import './index.css'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

class Jobs extends Component {
  state = {
    activeType: '',
    activeRange: '',
  }

  onCheckBox = employmentTypeId => {
    console.log(employmentTypeId)
    this.setState({activeType: employmentTypeId})
  }

  onRadio = activeRangeId => {
    this.setState({activeRange: activeRangeId})
  }

  /* state = {
    jobsList: [],
    isLoading: false,
    inputValue: '',
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
      
  renderProductsList = () => {
    const {jobsList} = this.state
    const c = jobsList.length === 0
    if (c) {
      return <NoJobsFound />
    }
    return (
      <>
        <h1 className="products-list-heading">All Products</h1>
        <ul className="products-list">
          {jobsList.map(job => (
            <JobCard jobData={job} key={job.id} />
          ))}
        </ul>
      </>
    )
  }

  renderLoader = () => (
    <div className="products-loader-container">
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

  onCheckBox = label => {
    const {jobsList} = this.state
    const filteredList = jobsList.filter(
      eachJob => eachJob.employmentType === label,
    )
    this.setState({jobsList: filteredList})
  }

  onRadio = digit => {
    console.log(digit)
    const {jobsList} = this.state
    const filteredList = jobsList.filter(eachJob =>
      eachJob.packagePerAnnum.includes(digit),
    )
    console.log(filteredList)
    this.setState({jobsList: filteredList})
  } */

  render() {
    const {activeRange, activeType} = this.state
    return (
      <div className="bg-container">
        <Header />
        <div className="jobs-container">
          <div className="left-container">
            <div>
              <JobbyCard />
            </div>
            <hr color="white" width="80%" />
            <div>
              <h1>Type Of Employment</h1>
              <ul className="typeofE">
                {employmentTypesList.map(each => (
                  <TypeOfEmployment
                    key={each.employmentTypeId}
                    eachDetails={each}
                    onCheckBox={this.onCheckBox}
                  />
                ))}
              </ul>
            </div>
            <hr color="white" width="80%" />
            <div>
              <h1>salary range</h1>
              <ul className="typeofE">
                {salaryRangesList.map(each => (
                  <SalaryRange
                    key={each.salaryRangeId}
                    eachDetails={each}
                    onRadio={this.onRadio}
                  />
                ))}
              </ul>
            </div>
          </div>
          <div className="right-container">
            <div>
              <div>
                <AllJobsSection
                  activeRange={activeRange}
                  activeType={activeType}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Jobs
