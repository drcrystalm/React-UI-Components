import React from "react"
import "./Header.css"
import ImageThumbnail from "./ImageThumbnail"
import HeaderTitle from "./HeaderTitle"
import HeaderContent from "./HeaderContent"

const HeaderContainer = () => {
    return (
        <div className='header-container'>
            <div className='upper'>
                <ImageThumbnail />
                <HeaderTitle />
            </div>
            <HeaderContent />
        </div>
    )
}

export default HeaderContainer
