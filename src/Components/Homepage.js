import React from 'react'
import './Homepage.css';
import {BrowserRouter as Router,Route,Switch,Link} from  'react-router-dom'
import DressStore from './DressStore';
import Carshowroom from './Carshowroom';
import Shopping from './Shopping';
import Cars from '../gltf_items/Cars'
function Homepage() {
    return (
        <div className="container-fluid" style={{textAlign:"center"}}>
            <p className="display-3"><span>R-360</span> for our <span id="span1">SAFETY</span></p>
            <br></br>
            <p style={{fontSize:15}}>Tip:"You can See the AR View at the bottom when you click View in AR"</p>
           <div className="box1 container">
             <img id="one" height="300" width="200" src={process.env.PUBLIC_URL+'/images/dresstore.jpg'}></img>
             <p  style={{textAlign:"center",
             fontSize:"50px",
             color:"Orange"
            }}>Dress Store</p>
            <p id="para1">Here You can buy dresses with best quality and you can view all type
            of dresses available in the store in both AR and VR view </p>
               <Router>
                 <button style={{
                     border:"none",
                     outline:"none",
                     background:"orange"
                 }}>
                     <Link style={{
                     outline:"none",
                     border:"none",
                     background:"orange",
                     color:"white",
                     textDecoration:"none",
                     
                 }} to='/DressStore' >View in AR</Link>
                 </button>
                 <button style={{
                     border:"none",
                     outline:"none",
                     background:"orange"
                 }}>
                     <a style={{
                     outline:"none",
                     border:"none",
                     background:"orange",
                     color:"white",
                     textDecoration:"none",
                     
                 }} href={process.env.PUBLIC_URL+'/DressStore.html'}>View in VR</a>
                 </button>
                 {/* <button style={{
                     width:60,
                     border:"none",
                     outline:"none",
                     background:"orange"
                 }}>
                    <a style={{
                     outline:"none",
                     border:"none",
                     background:"orange",
                     color:"white",
                     textDecoration:"none",
                     
                 }} href="/" >Buy</a>
                 </button> */}
                 <Switch>
                     <Route  path="/DressStore" exact component={DressStore}></Route>
                 </Switch>
               </Router>
           </div>
           <br></br>
           <div id="dummy"></div>
           <div className="box2 container">
             <img id="two" height="300" width="200" src={process.env.PUBLIC_URL+'/images/cars.jpg'}></img>
             <p id="titled" >Car Showroom</p>
            <p style={{
                textAlign:"justify",
                fontSize:"20px"
            }}>Here You can buy Cars with best quality and you can view all type
            of Cars available in the store in both AR and VR view </p>
               <Router>
                 <button style={{
                     border:"none",
                     outline:"none",
                     background:"rgba(0,0,0,0.6)"
                 }}>
                     <Link style={{
                     outline:"none",
                     border:"none",
                     color:"white",
                     textDecoration:"none",
                     
                 }} to='/Carshowroom' >View in AR</Link>
                 </button>
                 <button style={{
                     border:"none",
                     outline:"none",
                     background:"rgba(0,0,0,0.6)"
                 }}>
                     <a style={{
                     outline:"none",
                     border:"none",
                     color:"white",
                     textDecoration:"none",
                     
                 }} href={process.env.PUBLIC_URL+'/Carshowroom.html'}>View in VR</a>
                 </button>
                 {/* <button style={{
                     width:60,
                     border:"none",
                     outline:"none",
                     background:"rgba(0,0,0,0.6)"
                 }}>
                    <a style={{
                     outline:"none",
                     border:"none",
                     color:"white",
                     textDecoration:"none",
                     
                 }} href="/" >Buy</a>
                 </button> */}
                 <Switch>
                     <Route  path="/Carshowroom" exact component={Carshowroom}></Route>
                 </Switch>
               </Router>
           </div>
           <br></br>
           <div id="dummy"></div>
           <div className="box3 container">
             <img id="three" height="300" width="200" src={process.env.PUBLIC_URL+'/images/mall.jpg'}></img>
             <p style={{textAlign:"center",
             fontSize:"50px",
             color:"rgba(0,0,128,0.5)"
            }}>Shopping Mall</p>
            <p id="para2">Here You can buy dresses with best quality and you can view all type
            of dresses available in the store in both AR and VR view </p>
               <Router>
                 <button style={{
                     border:"none",
                     outline:"none",
                     background:"rgb(111,111,240)"
                 }}>
                     <Link style={{
                     outline:"none",
                     border:"none",
                     background:"rgb(111,111,240)",
                     color:"white",
                     textDecoration:"none",
                     
                 }} to='/Shopping' >View in AR</Link>
                 </button>
                 <button style={{
                     border:"none",
                     outline:"none",
                     background:"rgb(111,111,240)"
                 }}>
                     <a style={{
                     outline:"none",
                     border:"none",
                     background:"rgb(111,111,240)",
                     color:"white",
                     textDecoration:"none",
                     
                 }} href={process.env.PUBLIC_URL+'/Carshowroom.html'}>View in VR</a>
                 </button>
                 {/* <button style={{
                     width:60,
                     border:"none",
                     outline:"none",
                     background:"rgb(111,111,240)"
                 }}>
                    <a style={{
                     outline:"none",
                     border:"none",
                     background:"rgb(111,111,240)",
                     color:"white",
                     textDecoration:"none",
                 }} href="/" >Buy</a>
                 </button> */}
                 <Switch>
                     <Route  path="/Shopping" exact component={Shopping}></Route>
                 </Switch>
               </Router>
           </div>
              </div>
    )
}

export default Homepage
