import './index.css'

const SalaryRange = props => {
  const {eachDetails, onRadio} = props
  const {label, salaryRangeId} = eachDetails

  const onClickRadio = () => {
    onRadio(salaryRangeId[0])
  }

  return (
    <div>
      <li>
        <input type="radio" id={salaryRangeId} onClick={onClickRadio} />
        <label htmlFor={salaryRangeId}>{label}</label>
      </li>
    </div>
  )
}
export default SalaryRange
