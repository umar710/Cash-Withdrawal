import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {count: 2000}

  onCountPaymement = value => {
    this.setState(prevState => ({count: prevState.count - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <div className="profile-name-card">
            <div className="profile">
              <h1>S</h1>
            </div>
            <h1 className="name">Sarah Wilams</h1>
          </div>
          <div className="balance-card">
            <p className="title-balance">Your Balance</p>
            <div>
              <p className="rupees">{count}</p>
              <p className="in-rpees">In Rupees</p>
            </div>
          </div>
          <div>
            <p className="rupees">Withdraw</p>
            <p className="title-balance">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="btn-card">
            {denominationsList.map(eachItem => (
              <DenominationItem
                denominationDetails={eachItem}
                key={eachItem.id}
                onCountPaymement={this.onCountPaymement}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
