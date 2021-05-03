import React from 'react'
import Data from '../BoardData'
import {Instagram} from '@styled-icons/boxicons-logos/Instagram'
import { Linkedin } from '@styled-icons/boxicons-logos'
import {Link} from 'react-router-dom'

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
        <div className="Card" key={data.id}>
        <img className="Card-top" src={data.img} alt="Card cap" />
        <div className="card-body">
            <div className="header">
            <h5 className="Card-title">{data.name}</h5>
                <div className="social-i">
                <a href={data.inst}><Instagram size="25" color="#ffffff"/></a>
                <a href={data.link} id="linkedin"><Linkedin size="24" color="#ffffff"/></a>
                </div>
            </div> 
            <p className="Card-text">{data.desg}</p>
        </div>
        </div> )}
        </div>
        <div className="row">
        <Link to="/boards" id="See">See More</Link>
        </div>
        <br/><br/>
        
        
        </div>
    )
}

export default Board
