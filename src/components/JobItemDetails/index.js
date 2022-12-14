import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import JobItemDetailsCard from '../JobItemDetailsCard'
import SimilarJobsCard from '../SimilarJobsCard'
import Header from '../Header'
import './index.css'

class JobItemDetails extends Component {
  state = {
    dataaa: {},
    apiStatus: 'INITIAL',
  }

  componentDidMount() {
    this.getProductsData()
  }

  getProductsData = async () => {
    this.setState({
      apiStatus: 'LOADING',
    })
    console.log('Loading')
    const {match} = this.props
    const {params} = match
    const {id} = params

    const apiUrl = `https://apis.ccbp.in/jobs/${id}`
    const jwtToken = await Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()

      const updatedSkills = fetchedData.job_details.skills.map(each => ({
        imageUrl: each.image_url,
        name: each.name,
      }))

      const updatedLifeAtCompany = {
        description: fetchedData.job_details.life_at_company.description,
        imageUrl: fetchedData.job_details.life_at_company.image_url,
      }

      const updatedJobDetails = {
        companyLogoUrl: fetchedData.job_details.company_logo_url,
        companyWebsiteUrl: fetchedData.job_details.company_website_url,
        employmentType: fetchedData.job_details.employment_type,
        id: fetchedData.job_details.id,
        jobDescription: fetchedData.job_details.job_description,
        skills: updatedSkills,
        lifeAtCompany: updatedLifeAtCompany,
      }

      const updatedSimilarJobs = fetchedData.similar_jobs.map(eachCard => ({
        companyLogoUrl: eachCard.company_logo_url,
        employmentType: eachCard.employment_type,
        id: eachCard.id,
        jobDescription: eachCard.job_description,
        location: eachCard.location,
        rating: eachCard.rating,
        title: eachCard.title,
      }))

      const updatedData = {
        jobDetails: updatedJobDetails,
        similarJobs: updatedSimilarJobs,
      }

      this.setState({dataaa: updatedData, apiStatus: 'SUCCESS'})
      console.log('loading over and updatedData set to state successfully')
    } else if (response.status === 401) {
      this.setState({apiStatus: 'FAILURE'})
    }
  }

  renderSuccess = () => {
    const {dataaa} = this.state
    console.log(dataaa)
    console.log('reached to renderjobDetails')
    const {jobDetails, similarJobs} = dataaa

    return (
      <div>
        <Header />
        <JobItemDetailsCard jobDetails={jobDetails} />
        <h1>Similar Jobs</h1>
        <ul className="un-list">
          {similarJobs.map(each => (
            <SimilarJobsCard key={each.id} eachDetails={each} />
          ))}
        </ul>
      </div>
    )
  }

  renderFailure = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>we cannot seem to find the page you are looking for.</p>
      <button type="button">Retry</button>
    </div>
  )

  renderLoader = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  render() {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case 'LOADING':
        return this.renderLoader()
      case 'SUCCESS':
        return this.renderSuccess()
      case 'FAILURE':
        return this.renderFailure()
      default:
        return null
    }
  }
}

export default JobItemDetails
