import React, { useId } from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = "",

}) {
    const id = useId();
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>

            <div className='w-1-2'>

                <label htmlFor={id} className='text-black/40 mb-2 inline-block '>{label}</label>

                <input type='number'
                    id={id}
                    className='outline-none w-full py-1.5 px-0 bg-transparent'
                    placeholder='Amount'
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e) =>
                        onAmountChange && onAmountChange(Number(e.target.value))
                    }

                />
            </div>

            <div className='w-1/2 flex flex-wrap text-right justify-end'>
                <p className='text-black mb-2 w-full'>Currency Type</p>
                <select
                    value={selectedCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisabled}
                >
                    {currencyOptions.map((currency) =>
                        (<option key={currency} value={currency}>{currency}</option>)
                    )}

                </select>
            </div>


        </div>
    )
}

export default InputBox