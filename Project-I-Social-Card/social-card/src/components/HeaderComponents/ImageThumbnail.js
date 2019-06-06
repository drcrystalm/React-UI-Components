import React from "react"
import "./Header.css"
import Logo from "./lambdacrest.png"

const ImageThumbnail = () => {
    return (
        <div className='thumbnail'>
            <img src={Logo} alt='Lambda Logo' id='Lambda-crest' />
        </div>
    )
}

export default ImageThumbnail
