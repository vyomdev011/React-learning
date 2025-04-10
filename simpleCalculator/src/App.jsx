import { useState } from 'react'
import Header from './components/Header.jsx'
import './App.css'
import { evaluate } from 'mathjs';
import DisplayContainer from './components/DisplayContainer.jsx';
import ButtonsConatiner from './components/ButtonsConatiner.jsx';


function App() {

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  // handle click fuction
  const handleClick = (e) => {
    const targetValue = e.target.name;
    setInput(input + targetValue);
  }

  // for operator clicking 

  const operatorClick = (operator) => {
    let lastChar = input.trim().slice(-1);
    let arr = ["+ ", "- ", "* ", "/ "];
    console.log(lastChar);
    // if last charcter is operator or string is empty 
    if (input === "" || arr.includes(lastChar)) {
      return;
    }
    setInput((prev) =>
      prev + " " + operator + " "

    )

  }

  //for backspace

  const backspace = () => {
    setInput(input.slice(0, -1));
  }

  //for cleraing the input expression fronm display-field where input expression to be inputting by user
  const clear = () => {
    setInput("");
    setOutput('');
  }

  // for handling equal button click event

  const equalOperator = () => {
    if (["+", "-", "*", "/"].includes(input.trim().slice(-1))) {
      setOutput("error - expression can't end with an operator");
      return;
    }

    try {
      const res = calculater(input);  // use input first
      setOutput(String(res));
      // setInput(""); // clear it after you're done
    } catch (error) {
      setOutput("error");
    }
  }


  // set result or calculate the result of values
  const calculater = (expression) => {
    const result = evaluate(expression); // 14
    return result;
  }

  return (
    <>
      <Header />

      <DisplayContainer
        display={input}
        result={output}
        backspace={backspace}
        clear={clear}
      />
      <ButtonsConatiner
        handleClick={handleClick}
        operatorClick={operatorClick}
        handleEqual={equalOperator}
      />
      <h1 className='my-10 py-10 bg-green-200 rounded-2xl mx-10 px-10 text-center text-black text-4xl'>
        Created by{" "}
        <a href='https://github.com/vyomdev011' target='_blank' rel='noopener noreferrer' className="  hover:text-blue-600">
          Vishal Vats
        </a>
      </h1>



    </>
  )
}

export default App
