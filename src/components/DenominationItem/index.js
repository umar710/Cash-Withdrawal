import './index.css'

const DenominationItem = props => {
  const {denominationDetails, onCountPaymement} = props
  const {value, id} = denominationDetails
  const onClickBtn = () => {
    onCountPaymement(value)
  }
  return (
    <li>
      <div className="btn-card">
        <button onClick={onClickBtn} className="btn" type="button">
          {value}
        </button>
      </div>
    </li>
  )
}

export default DenominationItem
