import {Component} from 'react'

class SimilarJobss extends Component {
  state = {
    data: {},
  }

  componentDidMount() {
    const {secondPartData} = this.props
    console.log(secondPartData)
    const {SimilarJobs} = secondPartData
    const updatedData = SimilarJobs.map(each => ({
      companyLogoUrl: each.company_logo_url,
      employmentType: each.employment_type,
      id: each.id,
      jobDescription: each.job_description,
      location: each.location,
      rating: each.rating,
      title: each.title,
    }))
    this.setState({
      data: updatedData,
    })
  }

  renderCard = each => (
    <li>
      <p>{each.title}</p>
    </li>
  )

  render() {
    const {data} = this.state
    return (
      <div>
        <ul>{data.map(each => this.renderCard(each))}</ul>
      </div>
    )
  }
}
export default SimilarJobss
