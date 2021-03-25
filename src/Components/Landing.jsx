import React from 'react'
import Main from '../Images/LandImg.png'
import Nav from './Nav'
import {FacebookBox} from '@styled-icons/remix-line/FacebookBox'
import {Medium} from '@styled-icons/boxicons-logos/Medium'
import {Instagram} from '@styled-icons/boxicons-logos/Instagram'
import {Linkedin} from '@styled-icons/boxicons-logos/Linkedin'

const Landing = () => {
    return (
        <div className="Landing">
        <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
        <Nav/>
        <div className=" titles caption1">
            <hr/>
            <h4>WE ARE AYUDA NGO</h4>
        </div>
        <div className=" titles caption2">
        <p>At <span>Ayuda</span>, we work towards the betterment of our <span>world</span> </p>
        </div>
        <div className=" titles caption3">
        <p>Bring out the change in society by spreading hands to help the unprivileged children and other backward communities.</p>
        </div>
        <div className=" titles btns">
            <a href="." className="Learn">Learn More</a>
            <a href="." className="touch">Get in Touch</a>
        </div>
        
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <img src={Main} alt="Mainimg" id="Mainimg"/>
            <div className="social">
            <FacebookBox
                size="30"
                color="#a9a9a9"
                className="icon"
            />
            <br/>
            <Instagram
                size="30"
                color="#a9a9a9"
                className="icon"
            />
            <br/>
            <Linkedin 
                size="30"
                color="#a9a9a9"
                className="icon"
            />
            <br/>
            <Medium 
                size="30"
                color="#a9a9a9"
                className="icon"
            />
            </div>
        </div>
            
        </div>
            
        </div>
    )
}

export default Landing