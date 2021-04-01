import React from 'react'
// import Data from '../Data'
import pic20201 from '../Images/pic2020-1.jpg'
import {Instagram} from '@styled-icons/boxicons-logos/Instagram'
import { Linkedin } from '@styled-icons/boxicons-logos'

const Board = () => {
    // const data1 =()=>{
    //     return(Data[0].y2020)
    // }
    return (
        <div className="Board">
        <br/>
        <br/>
        <h1>BOARD MEMBERS</h1>
        <div className="container">
        <div className="Card">
        <img class="Card-top" src={pic20201} alt="Card cap" />
        <div class="card-body">
            <div className="header">
            <h5 class="Card-title">Vandana Mansur</h5>
            <div className="social-i">
            <a href="."><Instagram size="25" color="#ffffff"/></a>
            <a href="."><Linkedin size="24" color="#ffffff"/> </a>
            </div>
            </div>
            <p class="Card-text">Chairperson</p>
        </div>
        </div>
        </div>
        
        </div>
    )
}

export default Board
