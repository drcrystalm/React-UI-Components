import React from "react"
import "./App.css"
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay"
import Clear from "./components/DisplayComponents/Clear"

const App = () => {
    return (
        <div>
            <h3 id='welcome'>Welcome to Crystal's React Calculator!</h3>

            <CalculatorDisplay />
            <Clear />
        </div>
    )
}

export default App
