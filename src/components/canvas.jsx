import { useEffect,useState } from 'react'
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

function canvas( ) {


    useEffect(()=>{
        const scene = new THREE.Scene();
      
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#bg'),alpha:true,antialias:true
    });
    
    
    renderer.setPixelRatio(window.devicePixelRatio);
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    renderer.outputEncoding = THREE.sRGBEncoding;
    
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    
    camera.position.setZ(30);
    
    camera.position.setX(-3);
    window.addEventListener( 'resize', onWindowResize, false );
    
    function onWindowResize(){
    
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    
        renderer.setSize( window.innerWidth, window.innerHeight );
    
    }
    
    
    renderer.render(scene, camera);
    
    
    
    //repeat the wrapping 10 (x) and 6 (y) times
    function randomRange(min, max) {
      return Math.random() * (max - min) + min;
    }
        const geometry = new THREE.SphereGeometry(0.20, 6, 5);
    
    const material = new THREE.MeshBasicMaterial({ color: 0xFFB6C1});
    material.transparent=true;
    material.opacity=0;
    
    const sphere = new THREE.Mesh(geometry, material);
   
   
    
    
   
     
   
   
 
    
    
     scene.background = new THREE.Color( 0x191919 );
    
     function randomLightPosition(){
      const [x, y, z] = Array(3)
      .fill()
      .map(() => randomRange(-15,60));
      return [x,y,z]
     }
     function randomColour(){
      const digits = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
      let hexCode = '0x';
      while( hexCode.length < 7 ){
        hexCode += digits[ Math.round( Math.random() * digits.length ) ]
      }
      
     }

  
    const directionalLight= new THREE.DirectionalLight(0xEC7213,1)
    // console.log(randomLightPosition())
    directionalLight.position.set(randomLightPosition()[0],randomLightPosition()[1],randomLightPosition()[3]);
    
    
    const directionalLight2= new THREE.DirectionalLight( 0x7213ec, 1 );
    
    directionalLight2.position.set(randomLightPosition()[0],randomLightPosition()[1],randomLightPosition()[3]);
    
    const directionalLight3= new THREE.DirectionalLight(0x13EC72,1)
    
    directionalLight3.position.set(randomLightPosition()[0],randomLightPosition()[1],randomLightPosition()[3]);

    
    
    const ambientLight = new THREE.AmbientLight(0xffff,1);
    
    sphere.add( ambientLight,directionalLight,directionalLight2,directionalLight3);
    console.log(0xff001)
    scene.add(sphere);
    const rainGeometry = new THREE.ConeBufferGeometry(0.30, 2, 5);
    const rainMaterial = new THREE.MeshPhongMaterial({ color: 0x540914,shininess:100,specular:0xc0c0c0});
    let rainParticle=[];
    function rain(){
        for(let i=0;i<600;i++){
          rainParticle[i]=new THREE.Mesh(rainGeometry,rainMaterial)
          const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(100));
        rainParticle[i].position.set(x, y, z);
        scene.add(rainParticle[i]);
        }
       
      }
   rain();
    
    
  
    
    // const Stars= Array(200).fill().forEach(addStar);
    
       
   
  
  
    function animate(){
      requestAnimationFrame(animate);
      sphere.rotation.z +=0.015;
      for(let i=0;i<600;i++){
           rainParticle[i].position.y<-40?rainParticle[i].position.y=50: rainParticle[i].position.y-=0.31;
       }
      renderer.render(scene, camera);
      // console.log(scrollPercent);
    
    }
    
    
    
    
    animate();
      },[])
  return (
    <div>
        <canvas id="bg"></canvas>
    </div>
  )
}

export default canvas