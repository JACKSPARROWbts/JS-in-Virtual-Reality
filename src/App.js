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


// import React,{useEffect} from 'react'
// import * as THREE from 'three';
// import { BoxGeometry, MeshBasicMaterial } from 'three';
// import * as GLTF from 'three/examples/jsm/loaders/GLTFLoader';
// import * as OrbitControls from 'three/examples/jsm/controls/OrbitControls'
// import Tween  from '@tweenjs/tween.js';
// const scene=new THREE.Scene();
// const renderer=new THREE.WebGLRenderer({alpha:true,antialias:true});
// const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
// function App() {
//   useEffect(()=>{
//     camera.rotation.y=45;
//     camera.rotation.x=-100
//     camera.position.x=6;
//     camera.position.y=1;
//     camera.position.z=3;
//    scene.background=new THREE.Color(0xdddddd);
//    var hlight=new THREE.AmbientLight("grey",100);
//    scene.add(hlight);
//    var loader=new GLTF.GLTFLoader();
//    var controls=new OrbitControls.OrbitControls(camera,renderer.domElement);
//    loader.load(process.env.PUBLIC_URL+'/images/scene.gltf',(gltf)=>{
//      console.log("the scene is",gltf.scene.children[0])
//      scene.add(gltf.scene);
//      renderer.render(scene,camera);
//    },(xhr)=>{
//      console.log(xhr.target.responseURL);
//    })
//    renderer.setSize(window.innerWidth,window.innerHeight);
//    document.body.appendChild(renderer.domElement);
//   function animate(){
//     requestAnimationFrame(animate);
//     controls.update();
//     renderer.render(scene,camera);
//   }
//   animate();
//   },[])
//   return (
//     <div >
//     {/* <iframe  width="640" height="480" src="https://sketchfab.com/models/e66461a99d9c4db9ad9bed70c33efabf/embed?autostart=0&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe> */}
// </div>
//   )
// }

// export default App


//    var loader=new GLTF.GLTFLoader();
//    var controls=new OrbitControls.OrbitControls(camera,renderer.domElement);
//    loader.load(process.env.PUBLIC_URL+'/images/scene.gltf',(gltf)=>{
//      console.log("the scene is",gltf.scene.children[0])
//      scene.add(gltf.scene);
//      renderer.render(scene,camera);
//    },(xhr)=>{
//      console.log(xhr.target.responseURL);
//    })


//https://stackoverflow.com/questions/46140209/loop-rotation-on-any-axis-for-a-3d-obj-three-js#:~:text=If%20you%20want%20to%20continuously,inside%20the%20animate()%20function.