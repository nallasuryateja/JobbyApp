import './index.css'
import SkillCard from '../SkillCard'

const JobItemDetailsCard = props => {
  const {jobDetails} = props
  console.log(props)

  const {
    skills,
    lifeAtCompany,
    companyLogoUrl,
    employmentType,
    jobDescription,
  } = jobDetails

  console.log(employmentType)
  const {description, imageUrl} = lifeAtCompany
  return (
    <div className="bg-container">
      <div className="parts">
        <div className="first-part">
          <div className="first-sub-part-one">
            <img src={companyLogoUrl} alt="profile" />
            <div className="rating-container">
              <p>{employmentType}</p>
              <p>4</p>
            </div>
            <div className="first-sub-part-two">
              <p>mumbai</p>
              <p>{employmentType}</p>
              <div>
                <p>28 LPA</p>
              </div>
            </div>
          </div>
        </div>

        <div className="second-part">
          <div className="second-sub-part">
            <h1>Description</h1>
            <p>anchor link</p>
          </div>
          <p>{jobDescription}</p>
        </div>
        <div className="third-part">
          <h1>Skills</h1>
          <ul className="uno-list">
            {skills.map(each => (
              <SkillCard eachDetails={each} key={each.name} />
            ))}
          </ul>
        </div>
        <div className="fourth-part">
          <div className="fourth-one">
            <h1>Life at Company</h1>
            <p>{description}</p>
          </div>
          <div>
            <img src={imageUrl} alt="lifeimage" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default JobItemDetailsCard
