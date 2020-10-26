import React from 'react'
import './Theatre.css'
function Theatre() {
    return (
        <div>
            <div>
            <p  className="display-4 " style={{
                color:"rgb(157, 99, 71)",
            }}>Let's Watch Movie Together  in VR</p>
            <a className="bg-info" style={{
                color:"white",
                outline:"none",
                border:"none",
                textDecoration:"none"
            }} href={process.env.PUBLIC_URL+'/movie-vr.html'}>Watch Movie in VR</a>
            <br></br>
         <video style={{
             position:"absolute",
             left:"25%"
         }} controls autoPlay >
           <source src={process.env.PUBLIC_URL+'/video/bbb-sunflower-540p2-1min.webm'} ></source>
         </video>
            </div>
        </div>
    )
}

export default Theatre
