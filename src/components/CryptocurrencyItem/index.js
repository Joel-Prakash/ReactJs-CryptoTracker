import './index.css'

const CryptocurrencyItem = props => {
  const {eachItem} = props
  const {currencyLogo, currencyName, usdValue, euroValue} = eachItem
  return (
    <li className="currency-item-container">
      <div className="logo-name-container">
        <img src={currencyLogo} className="currency-logo" alt="currency_name" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="currency-values-container">
        <p className="usd-euro-item">{usdValue}</p>
        <p className="usd-euro-item">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
