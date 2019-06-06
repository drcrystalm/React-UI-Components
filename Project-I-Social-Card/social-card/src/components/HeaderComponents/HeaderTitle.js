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
            <h3> Lambda School</h3>
            <p> @LambdaSchool * 5 June </p>
        </div>
    )
}

export default HeaderTitle
