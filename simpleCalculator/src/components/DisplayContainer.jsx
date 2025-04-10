import React from 'react'
// import backspace from "./assets/backspace.png";
function DisplayContainer({display,result,backspace,clear}) {
    return (
        <>
            <div className="display-container">
                <div className="display">
                    <div className="input-field">{display}</div>
                    <div className="answer-field">{result}</div>
                </div>
                <div className="btns">
                    <button className="color-btn" onClick={backspace}>
                        <i className="backspace-icon"/>
                    </button>
                    <button onClick={clear} className="AC-btn color-btn">
                        AC
                    </button>
                </div>
            </div>
        </>

    )
}

export default DisplayContainer