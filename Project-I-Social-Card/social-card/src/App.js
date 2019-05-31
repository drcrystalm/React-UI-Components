import React from "react"
import "./App.css"
import HeaderContainer from "./components/HeaderComponents/HeaderContainer"
import CardContainer from "./components/CardComponents/CardContainer"
import Footer from "./components/FooterComponents/Footer"
// make sure the path names match exactly what is in your file. Casing might not matter on Windows, but it matters on Mac, so I had to correct these to compile your project. You will most likely work in a Mac environment, so I would get used to the convention of casing matters. 

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
