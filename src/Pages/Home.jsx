import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap-grid.css"
import Blogs from '../Components/Blogs'
import Board from '../Components/Board'
import Contact from '../Components/Contact'
import Events from '../Components/Events'
import Gallery from '../Components/Gallery'
import Initiatives from '../Components/Initiatives'
import Landing from '../Components/Landing'
import Story from '../Components/Story'
import Video from '../Components/Video'
import '../Styles/Home.scss'


const Home = () => {
    return (
        <div>
            <Landing/>
            <Story/>
            <Video/>
            <Initiatives/>
            <Gallery/>
            <Events/>
            <Blogs/>
            <Board/>
            <Contact/>

        </div>
    )
}

export default Home
