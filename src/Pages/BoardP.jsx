import React from 'react'
import logo from '../Images/Logohead.png'
import '../Styles/BoardPage.scss'
import {Link} from 'react-router-dom'
import Data from '../BoardData'
import {Instagram} from '@styled-icons/boxicons-logos/Instagram'
import { Linkedin } from '@styled-icons/boxicons-logos'

const BoardP = () => {
    const data1 =()=>{
        return(Data[0].y2021)
    }
    const data2 =()=>{
        return(Data[1].y2020)
    }
    const data3 =()=>{
        return(Data[2].y2019)
    }
    return (
        <div className="BoardP">
             <div className="Bhead row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 contoverflow">
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
                <div className="col-0 col-sm-0 col-md-0 col-lg-1 col-xl-1"></div>
                <div className="col-0 col-sm-0 col-md-0 col-lg-5 col-xl-5 boardscroll">
                    <div className="roll"></div>
                </div>
            </div>
            <br/><br/><br/><br/><br/><br/>
            <div className="Bcards">

            <h1>2021-2022</h1>

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

            <br/><br/>

            <h1>2020-2021</h1>

            <div className="cards">
            {data2().map((data)=>
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
            
            <br/><br/>

            <h1>2019-2020</h1>

            <div className="cards">
            {data3().map((data)=>
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

            </div>
            
        </div>
    )
}

export default BoardP
