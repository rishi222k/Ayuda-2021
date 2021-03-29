import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap-grid.css"
import Blogs from '../Components/Blogs'
import Board from '../Components/Board'
// import Events from '../Components/Events'
// import Initiatives from '../Components/Initiatives'
import Landing from '../Components/Landing'
import Story from '../Components/Story'
import '../Styles/Home.scss'


const Home = () => {
    return (
        <div>
            <Landing/>
            <Story/>
            {/* <Initiatives/>
            <Events/> */}
            <Blogs/>
            <Board/>

        </div>
    )
}

export default Home
