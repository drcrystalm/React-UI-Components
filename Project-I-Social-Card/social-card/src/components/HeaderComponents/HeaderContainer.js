import React from "react"
import "./Header.css"
import ImageThumbnail from "./ImageThumbnail"
import HeaderTitle from "./HeaderTitle"
import HeaderContent from "./HeaderContent"

const HeaderContainer = () => {
    //overall you have the makings of a really great project. We just need a little styling and filling out of the original design file. I would probably go to your body tag on the index.css file and create a max-width of no larger than 800px and then a width of 100%; 
    return (
        <div className="header-container">
            <ImageThumbnail />
            <div className="title-content">
                <HeaderTitle />
                <HeaderContent />
            </div>
            
        </div>
    )
}

export default HeaderContainer
