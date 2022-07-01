import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptoItemsList: [], isLoading: true}

  componentDidMount() {
    this.fetchCryptocurrencyItems()
  }

  fetchCryptocurrencyItems = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const jsonData = await response.json()
    const updatedData = jsonData.map(eachItem => ({
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
    }))
    this.setState({cryptoItemsList: updatedData, isLoading: false})
  }

  render() {
    const {cryptoItemsList, isLoading} = this.state

    let output
    if (isLoading) {
      output = (
        <div testid="loader" className="loader-container">
          <Loader type="Rings" color="#ffffff" height={80} width={80} />
        </div>
      )
    } else {
      output = (
        <div className="crypto-currencies-container">
          <h1 className="main-heading">Cryptocurrency Tracker</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            className="main-image"
            alt="cryptocurrency"
          />
          <div className="crypto-currencies-list">
            <div className="cryptos-headings-container">
              <h1 className="coin-type">Coin Type</h1>
              <div className="usd-euro-container">
                <h1 className="usd-euro">USD</h1>
                <h1 className="usd-euro">EURO</h1>
              </div>
            </div>
            <ul>
              {cryptoItemsList.map(eachItem => (
                <CryptocurrencyItem eachItem={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </div>
        </div>
      )
    }

    return <div>{output}</div>
  }
}

export default CryptocurrenciesList
