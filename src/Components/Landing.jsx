import React from 'react'
import Main from '../Images/LandImg.png'
import Nav from './Nav'
import {FacebookSquare} from '@styled-icons/boxicons-logos/FacebookSquare'
import {Medium} from '@styled-icons/boxicons-logos/Medium'
import {Instagram} from '@styled-icons/boxicons-logos/Instagram'
import {Linkedin} from '@styled-icons/boxicons-logos/Linkedin'
import {Link} from 'react-scroll'

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
        <p>At <span>Ayuda,</span> we work towards the betterment of our <span>world</span> </p>
        </div>
        <div className=" titles caption3">
        <p>Bring out the change in society by spreading hands to help the unprivileged children and other backward communities.</p>
        </div>
        <div className=" titles btns">
            <Link to="Story" className="Learn" smooth={true} duration={1000}>Learn More</Link>
            <Link to="ContactUs" className="touch"smooth={true} duration={3000}>Get in Touch</Link>
        </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <img src={Main} alt="Mainimg" id="Mainimg"/>
            <div className="social">
            <a href="https://www.facebook.com/ngoayuda/" target="_blank" rel="noopener noreferrer"> <FacebookSquare
                size="32"
                color="#888888"
                className="icon"
            /></a>
            <br/>
            <a href="https://www.instagram.com/ayuda.ngo/" target="_blank" rel="noopener noreferrer"> <Instagram
                size="32"
                color="#888888"
                className="icon"
            /></a>
            <br/>
            <a href="https://www.linkedin.com/company/ayuda-ngo/" target="_blank" rel="noopener noreferrer"><Linkedin 
                size="30"
                color="#888888"
                className="icon"
            /></a>
            <br/>
            <a href="https://ngoayuda.medium.com/" target="_blank" rel="noopener noreferrer">
            <Medium 
                size="30"
                color="#888888"
                className="icon"
            /></a>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Landing
