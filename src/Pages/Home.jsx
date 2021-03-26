import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap-grid.css"
import Events from '../Components/Events'
import Initiatives from '../Components/Initiatives'
import Landing from '../Components/Landing'
import Story from '../Components/Story'
import '../Styles/Home.scss'


const Home = () => {
    return (
        <div>
            <Landing/>
            <Story/>
            <Initiatives/>
            <Events/>
        </div>
    )
}

export default Home
