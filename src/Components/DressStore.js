// import React,{useState,useEffect} from 'react';
// import './DressStore.css';
// import {WebVRManager} from 'webvr-boilerplate/build/webvr-manager';
// import * as WebXRButton from 'three/examples/jsm/webxr/VRButton';
// import {WebXRManager} from 'three/src/renderers/webxr/WebXRManager'
// import * as WebVRPolyfill from 'three/build/webvr-polyfill'
// import vrEffect from 'three-vreffect-module';
// import * as StereoEffect from 'three/examples/jsm/effects/StereoEffect';
// import * as DeviceOrientationControls from 'three/examples/jsm/controls/DeviceOrientationControls'
// import * as THREE from 'three';
// import vrControls from 'three-vrcontrols-module';
// import{VRButton} from 'three/examples/jsm/webxr/VRButton'
// import { Vector2 } from 'three';
// import * as OrbitControl from 'three/examples/jsm/controls/OrbitControls'
// var renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,});
// var scene=new THREE.Scene();
// var camera=new THREE.PerspectiveCamera(90,window.innerWidth/window.innerHeight,0.1,1000);
// function DressStore(){
//   const[pic,setPic]=useState(undefined);
//   useEffect(()=>{
// var geometry=new THREE.BoxGeometry(1,1,1);

// var element=renderer.domElement;
// const btn=VRButton.createButton(renderer);
// var container=document.getElementById("container")
// container.appendChild(btn);
// console.log(btn);
// renderer.xr.enabled=true;
// setPic(btn);
// console.log(renderer.vr)
// var loader=new THREE.TextureLoader();
// var material=new THREE.MeshBasicMaterial({color:"red",wireframe:true});
// var controls=new OrbitControl.OrbitControls(camera,renderer.domElement);
//       document.body.appendChild(renderer.domElement);
//      camera.position.set(-2,1,0);
//      camera.lookAt(0,0,0);
//      camera.position.z=5;
//      document.addEventListener("deviceorientation",setOrientationControls,true);
//      element.addEventListener("click",fullscreen,false);
//      function fullscreen(){
//       if (container.requestFullscreen) {
//         container.requestFullscreen();
//       } else if (container.msRequestFullscreen) {
//         container.msRequestFullscreen();
//       } else if (container.mozRequestFullScreen) {
//         container.mozRequestFullScreen();
//       } else if (container.webkitRequestFullscreen) {
//         container.webkitRequestFullscreen();
//       }
    
//      }
//      function setOrientationControls(e){
//        if(!e.alpha){
//          return ;
//        }
//      }
//      var cube=new THREE.Mesh(geometry,material);
//      scene.background=new THREE.Color(0xdddddd);
//    var hlight=new THREE.AmbientLight("grey",100);
//    scene.add(hlight);
// //    var loader=new GLTF.GLTFLoader();
// //    var controls=new OrbitControls.OrbitControls(camera,renderer.domElement);
// //    loader.load(process.env.PUBLIC_URL+'/images/scene.gltf',(gltf)=>{
// //      console.log("the scene is",gltf.scene.children[0])
// //      scene.add(gltf.scene);
// //      renderer.render(scene,camera);
// //    },(xhr)=>{
// //      console.log(xhr.target.responseURL);
// //    })
//      loader.load(process.env.PUBLIC_URL+"/images/dresses.jpg",(texture)=>{
//        var spheregeometry=new THREE.SphereGeometry(500,60,40);
//        var spherematerial=new THREE.MeshBasicMaterial({
//          map:texture,
//          side:THREE.DoubleSide,
         
//        })
//        spheregeometry.scale(-1,1,1);
//       var  mesh=new THREE.Mesh(spheregeometry,spherematerial);
//        scene.add(mesh);
//        mesh.position.set(0,0,0);
//      })
//      var animate=(timestamp)=>{
//        requestAnimationFrame(animate);
//          controls.update();
//          scene.rotateY(0.001)
//      };
//      animate();
//   },[])
//   const clicked=()=>{
//   alert('hello world');
//   }
//   return(
//     <div >
//       <div id="container"></div>
//     </div>
//   )
// }
// export default DressStore;

import React,{useState,useEffect} from 'react';
import './DressStore.css';
import * as DeviceOrientationControls from 'three/examples/jsm/controls/DeviceOrientationControls'
import * as THREE from 'three';
import {VRButton} from 'three/examples/jsm/webxr/VRButton'
import * as StereoEffect from 'three/examples/jsm/effects/StereoEffect'
import * as OrbitControl from 'three/examples/jsm/controls/OrbitControls'
var renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,});
var scene=new THREE.Scene();
var camera=new THREE.PerspectiveCamera(90,window.innerWidth/window.innerHeight,0.1,3000);
function DressStore(){
  const[pic,setPic]=useState(undefined);
  useEffect(()=>{
    var effect= new StereoEffect.StereoEffect(renderer);
var geometry=new THREE.BoxGeometry(1,1,1);
//var element=renderer.domElement;
//const btn=VRButton.createButton(renderer);
//document.body.appendChild(btn);
//console.log(btn);
//setPic(btn);
effect.setSize(window.innerWidth,window.innerHeight)
// var container=document.getElementById("container");
// element.addEventListener("click",animation,false);
// function animation(){
//   if (container.requestFullscreen) {
//             container.requestFullscreen();
//           } else if (container.msRequestFullscreen) {
//             container.msRequestFullscreen();
//           } else if (container.mozRequestFullScreen) {
//             container.mozRequestFullScreen();
//           } else if (container.webkitRequestFullscreen) {
//             container.webkitRequestFullscreen(); 
//           }
// }
renderer.xr.enabled=true;
var loader=new THREE.TextureLoader();
var material=new THREE.MeshBasicMaterial({color:"red",wireframe:true});
var controls=new OrbitControl.OrbitControls(camera,renderer.domElement);
controls.noPan=true;
controls.noZoom=true;

        renderer.setSize(window.innerWidth,window.innerHeight)
      document.body.appendChild(renderer.domElement);
     camera.position.set(-2,1,0);
     camera.lookAt(0,0,0);
     camera.position.z=5;
     var cube=new THREE.Mesh(geometry,material);
     scene.background=new THREE.Color(0xdddddd);
   var hlight=new THREE.AmbientLight("grey",100);
   scene.add(hlight);
   document.addEventListener("deviceorientation",setorientation,true);
   function setorientation(e){
     if(!e.alpha){
       return ;
     }
   }
//    var loader=new GLTF.GLTFLoader();
//    var controls=new OrbitControls.OrbitControls(camera,renderer.domElement);
//    loader.load(process.env.PUBLIC_URL+'/images/scene.gltf',(gltf)=>{
//      console.log("the scene is",gltf.scene.children[0])
//      scene.add(gltf.scene);
//      renderer.render(scene,camera);
//    },(xhr)=>{
//      console.log(xhr.target.responseURL);
//    })
     loader.load(process.env.PUBLIC_URL+"/images/dresses.jpg",(texture)=>{
       var spheregeometry=new THREE.SphereGeometry(500,60,40);
       var spherematerial=new THREE.MeshBasicMaterial({
         map:texture,
         side:THREE.FrontSide,
         
       })
       spheregeometry.scale(-1,1,1);
      var  mesh=new THREE.Mesh(spheregeometry,spherematerial);
      
       scene.add(mesh);
       mesh.position.set(0,0,0);
     })
     var animate=()=>{
       requestAnimationFrame(animate);
         controls.update();
         scene.rotateY(0.001)
       renderer.render(scene,camera);
     };
     animate();
  },[])
  const clicked=()=>{
  alert('hello world');
  }
  return(
    <div id="container">
      
    </div>
  )
}
export default DressStore;