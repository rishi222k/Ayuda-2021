import React from 'react'
import {FacebookSquare} from '@styled-icons/boxicons-logos/FacebookSquare'
import {Medium} from '@styled-icons/boxicons-logos/Medium'
import {Instagram} from '@styled-icons/boxicons-logos/Instagram'
import {Linkedin} from '@styled-icons/boxicons-logos/Linkedin'

const Contact = () => {
    return (
        <div className="ContactUs">
        <h1>GET IN TOUCH.</h1>
        <h1>GET INVOLVED.</h1>
        <p>“A person’s most useful asset is not a head full of knowledge, but a heart full of love, an ear ready to listen and a hand willing to aid others.” Want to volunteer, donate or share ideas? We would love to get in touch with you!</p>
        <a href="." id="contact">Contact Us</a>
        <div className="social">
           <a href="."><FacebookSquare
                size="30"
                color="#888888"
                className="icon"
            /></a>
            <a href="."><Instagram
                size="30"
                color="#888888"
                className="icon"
            /></a>
            <a href="."><Linkedin 
                size="30"
                color="#888888"
                className="icon"
            /></a>
            <a href="."><Medium 
                size="30"
                color="#888888"
                className="icon"
            /></a>
            </div>
            <p id="copyright">© Copyright 2021 | NGO Ayuda VIT</p>
            
        </div>
    )
}

export default Contact
