import React from 'react'
import Button from './Button'
function ButtonsConatiner({ handleClick, operatorClick, handleEqual }) {
    return (
        <div className='button-container'>
            <div className="btn-row">
                <Button


                    name={1}
                    value={1}
                    handleClick={handleClick}

                />
                <Button
                    name={2}
                    value={2}
                    handleClick={handleClick} />
                <Button name={3}
                    value={3}
                    handleClick={handleClick} />
                <Button 
                className="color-btn"
                    name={"+"}
                    value={"+"}
                    handleClick={() => operatorClick("+")} />

            </div>
            <div className='btn-row'>
                <Button name={4}
                    value={4}
                    handleClick={handleClick} />
                <Button name={5}
                    value={5}
                    handleClick={handleClick} />
                <Button name={6}
                    value={6}
                    handleClick={handleClick} />
                <Button 
                name={"-"}
                    value={"-"}
                    handleClick={() => operatorClick("-")} 
                    className="color-btn" />
            </div>
            <div className='btn-row'>
                <Button name={7}
                    value={7}
                    handleClick={handleClick} />
                <Button name={8}
                    value={8}
                    handleClick={handleClick} />
                <Button name={9}
                    value={9}
                    handleClick={handleClick} />
                <Button
                 className="color-btn" 
                 name={"*"}
                    value={"*"}
                    handleClick={() => operatorClick("*")} />
            </div>
            <div className='btn-row'>
                <Button name={0}
                    value={0}
                    handleClick={handleClick} />
                <Button 
                className="color-btn equal-btn"
                name={"="}
                    value={"="}
                    handleClick={handleEqual} />
                <Button
                    className="color-btn"
                    name={"/"}
                    value={"/"}
                    handleClick={() => operatorClick("/")} />
            </div>

        </div>
    )
}

export default ButtonsConatiner