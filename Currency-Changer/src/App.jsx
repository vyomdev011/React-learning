import { useState } from 'react'
import { InputBox } from './components/index'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo';
function App() {
  const [amount, setAmount] = useState(null)
  const [from, setFrom] = useState('usd') // from repersent current currency from which we need to convert
  const [to, setTo] = useState('inr') // to represent currency to which amount converted
  const [convertedAmount, setConvertedAmount] = useState(0); // evaluated equivalent amount of selected currnecy
  const currencyInfo = useCurrencyInfo(from);
  console.log(typeof currencyInfo);
  const options = Object.keys(currencyInfo);  //all currency types

  // logic function to conversion of amount to converted currency amount
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  //currency swapping functionality (from -> to or to -> from)
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount)
    setAmount(convertedAmount);
  }
  return (
    <div className='w-full h-screen flex flex-wrap
    justify-center items-center bg-cover bg-no-repeat'
      style={{ backgroundImage: `url(https://images.pexels.com/photos/3635539/pexels-photo-3635539.jpeg)` }}>

      <div
        className='w-full max-w-md mx-auto border 
      border-gray-60 rounded-lg p-5 backdrop-blur-hue bg-white/40'>

        <form onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}>

          {/* INPUT section */}
          <div
            className='w-full mb-1'
          >
            < InputBox 
            label="from"
            amount={amount}
            onAmountChange = {(amount)=>setAmount(amount)}
            currencyOptions={options}
            onCurrencyChange = {(currency)=>setFrom(currency)}
            selectedCurrency={from}
            />
          </div>

          {/* swapping button section */}
          <div className='relative w-full h-0.5'>
            <button
            id="swapping"
            onClick={swap}
            className='absolute left-1/2 -translate-x-1/2
            -translate-y-1/2  border-1 border-blue-100 rounded-md bg-blue-500
            text-white px-2 py-0.5' 
            >swap</button>

          </div>

        {/* output section */}
          <div
            className='w-full mb-1'
          >
            < InputBox 
            label="to"
            amount={convertedAmount}
            amountDisabled
            // onAmountChange = {(amount)=>setConvertedAmount(amount)}
            currencyOptions={options}
            onCurrencyChange = {(currency)=>setTo(currency)}
            selectedCurrency={to}
            />
          </div>

          <button 
          type='submit'
          className='w-full bg-blue-600 py-3 rounded-lg px-4 text-white'
          >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
        </form>
      </div>

    </div>

  )
}

export default App
