import React from "react"
import "./App.css"
import HeaderContainer from "./Components/HeaderComponents/HeaderContainer"
import CardContainer from "./Components/CardComponents/CardContainer"
import Footer from "./Components/FooterComponents/Footer"

const App = () => {
    return (
        <div className='App'>
            <HeaderContainer />
            <CardContainer />
            <Footer />
        </div>
    )
}

export default App
