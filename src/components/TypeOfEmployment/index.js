import './index.css'

const TypeOfEmployment = props => {
  const {eachDetails, onCheckBox} = props
  const {label, employmentTypeId} = eachDetails

  const onClickCheck = () => {
    onCheckBox(employmentTypeId)
    console.log('clicked checkbox')
  }
  return (
    <div>
      <li>
        <input type="checkbox" id={employmentTypeId} onClick={onClickCheck} />
        <label htmlFor={employmentTypeId}>{label}</label>
      </li>
    </div>
  )
}
export default TypeOfEmployment
