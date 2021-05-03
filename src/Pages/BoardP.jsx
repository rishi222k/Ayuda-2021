import React from 'react'
import logo from '../Images/Logohead.png'
import '../Styles/BoardPage.scss'
import {Link} from 'react-router-dom'

const BoardP = () => {
    return (
        <div className="BoardP">
             <div className="Bhead row">
                <div className="col-6 contoverflow">
                    <div className="title">
                        <img src={logo} alt="ayudalogo"/>
                        <p>Ayuda</p>
                    </div>
                    <div className="content">
                    <h3>Board Members</h3>
                    <h4>2016-2021</h4>
                    <p>“It is so hard to say goodbye to <span> strangers</span> who turned into <span> your family.</span> We miss your presence in the NGO and promise to continue your <span> legacy with pride. </span>It’s been one blur of fun!”</p>
                    <Link to="/">View Here</Link>
                    </div>
                </div>
                <div className="col-1"></div>
                <div className="col-5 boardscroll">
                    <div className="roll"></div>
                </div>
            </div>
            
        </div>
    )
}

export default BoardP
