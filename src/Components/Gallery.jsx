import React from 'react'
import {Link} from 'react-router-dom'

const Gallery = () => {
    return (
        <div className="Gallery">
        <h1>GALLERY</h1>
        <p>Every <span>Smile</span> has a story. <br/> With Each <span>Smile</span> we <span>capture,</span>  we hope to <br/><span> Connect, Inspire & Empower. </span></p>
        <Link to="/gallery">Open Gallery</Link>
        <br/><br/><br/>
        </div>
    )
}

export default Gallery
