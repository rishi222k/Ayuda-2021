import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap-grid.css"
import Landing from '../Components/Landing'
import Story from '../Components/Story'
import '../Styles/Home.scss'


const Home = () => {
    return (
        <div>
            <Landing/>
            <Story/>
        </div>
    )
}

export default Home
