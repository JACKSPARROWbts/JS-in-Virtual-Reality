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
function Shopping(){
  const[pic,setPic]=useState(undefined);
  useEffect(()=>{
    var effect= new StereoEffect.StereoEffect(renderer);
var geometry=new THREE.BoxGeometry(1,1,1);
effect.setSize(window.innerWidth,window.innerHeight)
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
     loader.load(process.env.PUBLIC_URL+"/images/mall.jpg",(texture)=>{
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
export default Shopping;