import React, { useState } from 'react'
import logo from '../Images/Logohead.png'

const Nav = () => {

    
    const [toggle, settoggle] = useState(false)
    const Click=()=>{
        settoggle(!toggle)
    }
    return (
        <nav>
            <div className="Navbar">
            <button className={`hamburger ${toggle ? 'opened':''}`} onClick={Click}>
            <svg width="100" height="60" viewBox="0 0 100 100">
              <path stroke-linecap="round" class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
              <path stroke-linecap="round" class="line line2" d="M 20,50 H 80" />
              <path stroke-linecap="round" class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
            </svg>
            </button>
            <img src={logo} alt="logo"/>
            <p>Ayuda</p>
            </div>
            <div className={`menu ${toggle ? 'menu-active':''}`}>
                <div className="menu-links">
                    <div className="menu-link"><a href="." onClick={Click}>Home</a></div>
                    <div className="menu-link"><a href="." onClick={Click}>Our Story</a></div>
                    <div className="menu-link"><a href="." onClick={Click}>Initiatives</a></div>
                    <div className="menu-link"><a href="." onClick={Click}>Events</a></div>
                    <div className="menu-link"><a href="." onClick={Click}>Board</a></div>
                    <div className="menu-link"><a href="." onClick={Click}>Contact Us</a></div>
                </div>
            </div>
        </nav>
        
    )
}

export default Nav
