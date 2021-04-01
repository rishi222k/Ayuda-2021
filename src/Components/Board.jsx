import React from 'react'
import Data from '../Data'
import {Instagram} from '@styled-icons/boxicons-logos/Instagram'
import { Linkedin } from '@styled-icons/boxicons-logos'

const Board = () => {
    const data1 =()=>{
        return(Data[0].y2021)
    }
    return (
        <div className="Board">
        <br/>
        <br/>
        <h1>BOARD <span> MEMBERS</span></h1>
        <div className="cards">
        {data1().map((data)=>
        <div className="Card">
        <img class="Card-top" src={data.img} alt="Card cap" />
        <div class="card-body">
            <div className="header">
            <h5 class="Card-title">{data.name}</h5>
                <div className="social-i">
                <a href={data.inst}><Instagram size="25" color="#ffffff"/></a>
                <a href={data.link}><Linkedin size="24" color="#ffffff"/></a>
                </div>
            </div>
            <p class="Card-text">{data.desg}</p>
        </div>
        </div> )}
        </div>
        <div className="row">
        <a href="." id="See">See More</a>
        </div>
        <br/><br/>
        
        
        </div>
    )
}

export default Board
