import React from "react"
import "./App.css"
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay"

const App = () => {
    return (
        <div>
            <h3 id='welcome'>Welcome to Crystal's React Calculator!</h3>

            <CalculatorDisplay />
        </div>
    )
}

export default App
