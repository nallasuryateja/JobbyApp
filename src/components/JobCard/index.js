import {Link} from 'react-router-dom'
import './index.css'

const JobCard = props => {
  const {jobData} = props
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
    id,
  } = jobData

  return (
    <Link to={`/jobs/${id}`}>
      <li className="job-item">
        <div>
          <div className="first-container">
            <img src={companyLogoUrl} alt={title} />
            <div className="f-sub">
              <h1>{title}</h1>
              <p>{rating}</p>
            </div>
          </div>
          <div className="second-container">
            <div className="s-sub">
              <p>{location}</p>
              <p>{employmentType}</p>
            </div>
            <div>
              <p>{packagePerAnnum}</p>
            </div>
          </div>
          <hr />
          <div className="third-container">
            <h1>Description</h1>
            <p>{jobDescription}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}
export default JobCard
