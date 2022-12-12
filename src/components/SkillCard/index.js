import './index.css'

const SkillCard = props => {
  console.log(props)
  const {eachDetails} = props
  const {imageUrl, name} = eachDetails
  return (
    <li>
      <img src={imageUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}
export default SkillCard
