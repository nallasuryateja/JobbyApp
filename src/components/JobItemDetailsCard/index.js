import './index.css'
import SkillCard from '../SkillCard'

const JobItemDetailsCard = props => {
  const {exportData} = props
  console.log(props)
  const {jobDetails} = exportData
  const {companyLogoUrl, employmentType, jobDescription, skills} = jobDetails
  return (
    <div className="bg-container">
      <div>
        <div className="first-part">
          <div className="first-sub-part-one">
            <img src={companyLogoUrl} alt="logo" />
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
        <hr />
        <div className="second-part">
          <div className="second-sub-part">
            <h1>{jobDescription}</h1>
            <p>anchor link</p>
          </div>
          <p>Are you intrested in building products</p>
        </div>
        <div className="third-part">
          <h1>Skills</h1>
          <ul>
            {skills.map(each => (
              <SkillCard eachDetails={each} key={each.name} />
            ))}
          </ul>
        </div>
        <div className="fourth-part">
          <div className="fourth-one">
            <h1>Life at Company</h1>
            <p>From building the future</p>
          </div>
          <div>
            <img src="" alt="lifeimage" />
          </div>
        </div>
      </div>
      <div className="fifth-part">
        <h1>Similar Jobs</h1>
      </div>
    </div>
  )
}
export default JobItemDetailsCard
