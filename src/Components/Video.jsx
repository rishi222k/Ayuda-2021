import React from 'react'
import ReactPlayer from 'react-player'
import thumb from '../Images/Thumbnail.png'
import play from '../Images/Play.svg'

const Video = () => {
    return (
        <div className="Vid">
            <p>Keeping our mission in mind, “To bring out the change in society by spreading hands to help out the underprivileged children and other backward social communities”</p>
            <ReactPlayer url="https://vimeo.com/589288784" 
                playing 
                controls 
                loop 
                // width="1050px"
                // height="470px"
                playIcon={<button id="play"><img src={play} alt="play" id="playbtn"/></button>}
                light={thumb}
                className="videot vjsbig"></ReactPlayer>
        </div>
    )
}

export default Video
