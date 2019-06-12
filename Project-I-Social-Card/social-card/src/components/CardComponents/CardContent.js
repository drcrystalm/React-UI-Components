import React from "react"
import "./Card.css"

const CardContent = () => {
    return (
        <div className='card-content'>
            <h3 className='getStarted'> Get started with React </h3>
            <p>
                React makes it painless to create interactive UIs. Design simple
                views for each state in your application.
            </p>
            <a href='http://www.reactjs.org' className='website'>
                reactjs.org
            </a>
        </div>
    )
}
export default CardContent
