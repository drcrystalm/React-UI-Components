import React from "react"
import "./Button.css"

const NumberButton = () => {
    return (
        <div className='topRow'>
            <div className='numbers'>
                <h1>7</h1>
            </div>
            <div className='numbers'>
                <h1>8</h1>
            </div>
            <div className='numbers'>
                <h1>9</h1>
            </div>
        </div>
        <div className='middleRow'>
        <div className='numbers'>
            <h1>7</h1>
        </div>
        <div className='numbers'>
            <h1>8</h1>
        </div>
        <div className='numbers'>
            <h1>9</h1>
        </div>
    </div>
    )
}

export default NumberButton
