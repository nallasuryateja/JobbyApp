import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import './index.css'

class JobbyCard extends Component {
  state = {
    data: {},
    apiStatus: 'INITIAL',
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    this.setState({apiStatus: 'LOADING'})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/profile'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      console.log(fetchedData)

      const updatedData = {
        name: fetchedData.profile_details.name,
        profileImageUrl: fetchedData.profile_details.profile_image_url,
        shortBio: fetchedData.profile_details.short_bio,
      }
      this.setState({
        data: updatedData,
        apiStatus: 'SUCCESS',
      })
    }
  }

  renderSuccessView = () => {
    const {data} = this.state
    const {shortBio, profileImageUrl, name} = data
    return (
      <div>
        <div className="bg-container">
          <img className="profile-image" src={profileImageUrl} alt={name} />
          <h1>{name}</h1>
          <p>{shortBio}</p>
        </div>
      </div>
    )
  }

  renderLoadingView = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <div>
      <button type="button">Retry</button>
    </div>
  )

  render() {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case 'LOADING':
        return this.renderLoadingView()
      case 'SUCCESS':
        return this.renderSuccessView()
      case 'FAILURE':
        return this.renderFailureView()
      default:
        return null
    }
  }
}
export default JobbyCard
