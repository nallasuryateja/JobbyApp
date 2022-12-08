import './index.css'

const SkillCard = props => {
  console.log(props)
  const {imageUrl, name} = props
  return (
    <li>
      <img src={imageUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}
export default SkillCard
