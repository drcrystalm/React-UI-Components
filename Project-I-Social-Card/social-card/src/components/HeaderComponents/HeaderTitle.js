import React from "react"
import "./Header.css"

// const Timestamp = Date(document.data.event_date)

// const FormattedTimestamp = Intl.DateTimeFormat("en-US", {
//     year: "numeric",
//     month: "short",
//     day: "2-digit",
//     hour: "numeric",
//     minute: "2-digit",
//     second: "2-digit",
// }).format(timestamp)

const HeaderTitle = () => {
    return (
        <div className='title'>
            <h1> Lambda School</h1>
            <h4> @LambdaSchool &middot; 5 June </h4>
        </div>
    )
}

export default HeaderTitle
