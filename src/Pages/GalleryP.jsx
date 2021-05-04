import React from 'react'
import logo from '../Images/Logohead.png'
import {Link} from 'react-router-dom'
import '../Styles/GalleryPage.scss'

const GalleryP = () => {
    return (
        <div className="GalleryP">
        <div className="Ghead row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 contoverflow">
                    <Link to="/" className="title">
                        <img src={logo} alt="ayudalogo"/>
                        <p>Ayuda</p>
                    </Link>
                    <div className="content">
                    <h3>Gallery Images</h3>
                    {/* <h4>2016-2021</h4> */}
                    <p>Every <span>Smile</span> has a story. With Each <span>Smile</span> we <span>capture,</span>  we hope to <span> Connect, Inspire & Empower.</span>
                    </p>
                    <Link to="/">View Here</Link>
                    </div>
                </div>
                {/* <div className="col-0 col-sm-0 col-md-0 col-lg-1 col-xl-1"></div> */}
                <div className="col-0 col-sm-0 col-md-0 col-lg-7 col-xl-7 galleryscroll">
                    <div className="roll"></div>
                </div>
            </div>
            <br/><br/><br/><br/><br/><br/>
            <div className="Gimages">
                
            </div>
        </div>
    )
}

export default GalleryP
