import React from 'react'
import Story1 from '../Images/Story1.png'
import Story2 from '../Images/Story2.png'

const Story = () => {
    return (
        <div className="Story">
        <br/>
        <br/>
        <h1>OUR STORY</h1>
        <div className="container">
            <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <img src={Story1} alt="Story1"/>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div>
                <p className="storytitle">How We got <span>started</span></p>
                <p className="storycont">Tracing back to the inception in 2013, Ayuda NGO was founded by a small group of students who not only wanted to bring a change into the world, but be the change. With this earnest thought in mind and a fierce hunger of motivation, Ayuda began its steady journey towards their aim to be the change.</p>
            </div>
            </div>
            </div>
            <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 order2">
                <p className="storytitle">Where we are <span>Now</span></p>
                <p className="storycont">With a huge, loving family of more than a hundred, Ayuda has achieved great recognition due to their diligent members, commendable team spirit and our blooming projects. Be it a campaign to stop sexual violence, spending the day at a differently- abled organisation or having session on drug abuse, we have done it all!</p>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 order1">
                <img src={Story2} alt="Story2" id="story2"/>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Story
