import React from "react"
import "./App.css"
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay"
import Clear from "./components/DisplayComponents/Clear"
import NumberButton from "./components/ButtonComponents/NumberButton"
import ActionButtons from "./components/ButtonComponents/ActionButton"

const App = () => {
    return (
        <div>
            <h3 id='welcome'>Welcome to Crystal's React Calculator!</h3>

            <CalculatorDisplay />
            <Clear />
            <NumberButton />
            <ActionButtons />
        </div>
    )
}

export default App
