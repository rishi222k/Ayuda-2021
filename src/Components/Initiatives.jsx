import React, { useState } from 'react'
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import sudhaar from '../Images/Initiatives/Sudhaar.png'
import gyaan from '../Images/Initiatives/Gyaan.png'
import nirmaan from '../Images/Initiatives/Nirmaan.png'
import gogreen from '../Images/Initiatives/Go-Green.png'
import muskaan from '../Images/Initiatives/Muskaan.png'
import { ArrowLeftSquareFill, ArrowRightSquareFill } from '@styled-icons/bootstrap'

const Initiatives = () => {
    const [card, setCard] = useState({
        goToSlide: 0,
        offsetRadius: 2,
        showNavigation: true,
        config: config.slow
      });

    const InCards=[
    {
        key: uuidv4(),
        content: <img src={sudhaar} alt="1" />,
        link:"https://medium.com/series/ccf401c07ae"
      },
      {
        key: uuidv4(),
        content: <img src={gyaan} alt="2" />,
        link:"https://medium.com/series/40893625143b"
      },
      {
        key: uuidv4(),
        content: <img src={nirmaan} alt="3" />,
        link:"https://medium.com/series/fb1492a32180"
      },
      {
        key: uuidv4(),
        content: <img src={gogreen} alt="4" />,
        link:"https://medium.com/series/46e8ab47fa44"
      },
      {
        key: uuidv4(),
        content: <img src={muskaan} alt="5" />,
        link:"https://medium.com/series/48c090b2a22f"
      },
      {
        key: uuidv4(),
        content: <img src={sudhaar} alt="1" />,
        link:"https://medium.com/series/ccf401c07ae"
      },
      {
        key: uuidv4(),
        content: <img src={gyaan} alt="2" />,
        link:"https://medium.com/series/40893625143b"
      },
      {
        key: uuidv4(),
        content: <img src={nirmaan} alt="3" />,
        link:"https://medium.com/series/fb1492a32180"
      },
      {
        key: uuidv4(),
        content: <img src={gogreen} alt="4" />,
        link:"https://medium.com/series/46e8ab47fa44"
      },
      {
        key: uuidv4(),
        content: <img src={muskaan} alt="5" />,
        link:"https://medium.com/series/48c090b2a22f"
      },
    ].map((slide,index)=>{
        return {
             ...slide,
            onClick: () =>{
                if(index===card.goToSlide)
                window.open(slide.link);
            setCard({ ...card, goToSlide: index })
            }
        }
    });

    const onRight =()=>{
        setCard({  ...card, goToSlide: card.goToSlide + 1 })
   }

   const onLeft =()=>{
       setCard({  ...card, goToSlide: card.goToSlide - 1 })
   }

    return (
        <div className="Initiatives">
        <br/>
        <br/>
        <div className="title">
        <h1><span>OUR</span> INITIATIVES</h1>
        </div>
        <div className="initiative-cards">
        <Carousel
          slides={InCards}
          goToSlide={card.goToSlide}
          offsetRadius={card.offsetRadius}
          showNavigation={card.showNavigation}
          animationConfig={card.config}
        />
        </div>
        
        <div className="row arrows">
        <ArrowLeftSquareFill 
        size="40" 
        onClick={onLeft} 
        className="leftarr"/>
        <ArrowRightSquareFill 
        size="40" 
        onClick={onRight}
        className="rightarr"/>
        </div>
        </div>
    )
}

export default Initiatives
