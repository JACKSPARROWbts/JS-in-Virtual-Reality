import React,{useEffect} from 'react'
import * as THREE from 'three';
import { BoxGeometry, MeshBasicMaterial } from 'three';
import * as GLTF from 'three/examples/jsm/loaders/GLTFLoader';
import * as OrbitControls from 'three/examples/jsm/controls/OrbitControls'
import Tween  from '@tweenjs/tween.js';
import Carshowroom from '../Components/Carshowroom';
const scene=new THREE.Scene();
const renderer=new THREE.WebGLRenderer({alpha:true,antialias:true});
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
function Bus() {
  useEffect(()=>{
    camera.rotation.y=45;
    camera.rotation.x=-100
    camera.position.x=6;
    camera.position.y=1;
    camera.position.z=3;
   scene.background=new THREE.Color(0xdddddd);
   var hlight=new THREE.AmbientLight("grey",100);
   scene.add(hlight);
   var loader=new GLTF.GLTFLoader();
   var controls=new OrbitControls.OrbitControls(camera,renderer.domElement);
   loader.load(process.env.PUBLIC_URL+'/images/gltf/scene.gltf',(gltf)=>{
     console.log("the scene is",gltf.scene.children[0])
     scene.add(gltf.scene);
     renderer.render(scene,camera);
   },(xhr)=>{
     console.log(xhr.target.responseURL);
   })
   renderer.setSize(window.innerWidth/4,window.innerHeight/2);
   document.body.appendChild(renderer.domElement);
  function animate(){
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene,camera);
  }
  animate();
  },[])
  return (
    <div >
    
</div>
  )
}

export default Bus;
