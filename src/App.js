import React, { useEffect } from 'react'
import Homepage from './Components/Homepage';
import Cars from './gltf_items/Cars';
import Theatre from './gltf_items/Theatre'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
function App() {
  useEffect(()=>{
    
  })
  return (
    <div>
      <Homepage></Homepage>
      <br></br>
      <div id="dummy"></div>
      <div className="container">
        <h4 style={{
          color:"rgba(0,0,0,0.5)",
          width:"250px"
        }}>Sample Cars for Sale</h4>
    <iframe title="A 3D model" width="550" height="480" src="https://sketchfab.com/models/fa144705edf340fe977ef83ee9d2e908/embed?autostart=0&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
    <iframe title="A 3D model" width="550" height="480" src="https://sketchfab.com/models/29c76ea294264212b0598f358fbce111/embed?autostart=0&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
   
      </div>
      <div style={{
        position:"absolute",
        left:"40%"
      }}>
    <br></br>
    <button style={{width:"200px",
   
  }} className="btn btn-outline-secondary ">Buy</button>
  <div style={{
    height:"20px"
  }}></div>
    </div>
    <div style={{
      height:"100px"
    }}></div>
    <div className="container-fluid">
    <Theatre></Theatre>
    </div>
      <br></br>
    </div>
  )
}

export default App
