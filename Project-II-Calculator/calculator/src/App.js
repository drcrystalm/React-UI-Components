import React from "react"
import "./App.css"
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay"
import NumberButton from "./components/ButtonComponents/NumberButton"
import ActionButton from "./components/ButtonComponents/ActionButton"

const App = () => {
    return (
        <div className='calc'>
            <CalculatorDisplay />

            <div className='calcButtons'>
                <ActionButton text='clear' buttonStyle='actionButton1' />

                <div className='thirdNums'>
                    <NumberButton text='7' buttonStyle='numberButton' />
                    <NumberButton text='8' buttonStyle='numberButton' />
                    <NumberButton text='9' buttonStyle='numberButton' />
                </div>
                <div className='column'>
                    <NumberButton
                        text='&divide;'
                        buttonStyle='operatorButton'
                    />
                    <NumberButton text='&times;' buttonStyle='operatorButton' />
                    <NumberButton text='&minus;' buttonStyle='operatorButton' />
                    <NumberButton text='&#43;' buttonStyle='operatorButton' />
                    <NumberButton text='&#61;' buttonStyle='operatorButton' />
                </div>
                <NumberButton text='1' buttonStyle='numberButton' />
                <NumberButton text='4' buttonStyle='numberButton' />
                <NumberButton text='5' buttonStyle='numberButton' />
                <NumberButton text='6' buttonStyle='numberButton' />

                <NumberButton text='2' buttonStyle='numberButton' />
                <NumberButton text='3' buttonStyle='numberButton' />

                <NumberButton text='0' buttonStyle='numberButton' />
            </div>
        </div>
    )
}

export default App
