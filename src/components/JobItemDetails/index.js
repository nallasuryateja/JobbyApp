import {Component} from 'react'
import Cookies from 'js-cookie'
import JobItemDetailsCard from '../JobItemDetailsCard'
import './index.css'

class JobItemDetails extends Component {
  state = {
    dataaa: {},
    isDataFetched: false,
  }

  componentDidMount() {
    this.getProductsData()
  }

  getProductsData = async () => {
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

      console.log(fetchedData)
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
      this.setState({dataaa: updatedData})
    }
  }

  renderJobDetails = () => {
    const {dataaa} = this.state
    console.log(dataaa)
    const {jobDetails} = dataaa

    return (
      <div>
        <JobItemDetailsCard exportData={jobDetails} />
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

  render() {
    const {isDataFetched} = this.state

    return (
      <div className="main-bg-container">
        {isDataFetched ? this.renderFailure() : this.renderJobDetails()}
      </div>
    )
  }
}

export default JobItemDetails
