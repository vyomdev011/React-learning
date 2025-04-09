import { useState,useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllow] = useState(false)
  const [CharAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllowed){
      str += "0123456789";
    }
    if(CharAllowed){
      str += "!@#$%^&*-+";
    }

    for(let i = 1;i<length;i++){
      const char = Math.floor(Math.random()*str.length + 1);
      pass += str[char];
    }
    setPassword(pass);

  },[length,numAllowed,CharAllowed])


  const copyPasswordToClipboard =()=>{
    window.navigator.clipboard.writeText(password);

    passwordRef.current.select();
  };

  useEffect(()=>{
    generatePassword();
}, [length,numAllowed,CharAllowed,!onload] )

  return (

    // container
    <div className=" rounded-lg px-5 my-8 bg-gray-700">

      {/* for headline */}
      <h1 className='text-white  text-center my-3 p-6 '>
        password generator
      </h1>

      {/* section 1 */}
      {/* for input section and copy button */}
      <div className='flex flex-row justify-center shadow rounded-lg mb-4 bg-gray-300 overflow-hidden flex-nowrap'>

        < input type='text' value={password} placeholder='generate a password'
          className='outline-none w-full py-1 text-black-300  px-3 '
          readOnly
        ref={passwordRef}
        />

        <button className="outline-none text-gray-800 bg-amber-400 px-3 py-0.5 shrink-0 button-hover"
         onClick={copyPasswordToClipboard}
        >
          Copy
        </button>


      </div>

      {/* section2 */}
      {/* for character section  */}
      <div className='text-orange-500 flex text-sm gap-x-2 pb-5'>

        {/* for character length to toggle */}
        <div className=']flex items-center gap-x-1'>
          <input
            type="range"
            min={6} max={100}
            value={length}
            name=''
            id=''
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
          />
          < label htmlFor='length'> length:
            {length}</label>

        </div>

        {/* to choose numbers (number allowed)*/}
        <div className=']flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            name=''
            id=''
            onChange={() => {
              setNumAllow((prev) => !prev)
            }}
          />

          < label htmlFor='number'> Numbers</label>

        </div>

        {/* to choose charcaters */}
        <div className=']flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={CharAllowed}
            name=''
            id=''
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
          />

          < label htmlFor='characters'> characters</label>

        </div>

      </div>



    </div>


  )
}

export default App
