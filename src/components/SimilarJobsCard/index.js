import './index.css'

const SimilarJobsCard = props => {
  const {eachDetails} = props
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    rating,
    title,
  } = eachDetails
  return (
    <li className="bgg-container">
      <div className="logo-container">
        <img src={companyLogoUrl} alt="logo" />
        <div className="rating-container">
          <h1>{title}</h1>
          <p>{rating}</p>
        </div>
      </div>
      <h1>Description</h1>
      <p>{jobDescription}</p>
      <div className="location-container">
        <p>{location}</p>
        <p>{employmentType}</p>
      </div>
    </li>
  )
}
export default SimilarJobsCard
