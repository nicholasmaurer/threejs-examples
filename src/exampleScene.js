var THREE = require('three');
import Icon from './icon.png';

export default class ExampleScene {

    constructor() {
    
        let scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

        var renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var texture = new THREE.TextureLoader().load( Icon );
        var material = new THREE.MeshBasicMaterial( { map: texture } );
        var cube = new THREE.Mesh( geometry, material );
        scene.add( cube );

        camera.position.z = 5;

        this.dynamicReflection = false;

        if(this.dynamicReflection){
            this.cubeCamera = new THREE.CubeCamera(0.1, 10, 512); 
            this.scene.add(this.cubeCamera);
            this.cubeCamera.layers = this.layerOne;
          }else{
            this.cubeTexture = new THREE.CubeTextureLoader().load(urls);
            this.cubeTexture.format = THREE.RGBFormat;
        }

        var animate = function () {
            requestAnimationFrame( animate );
            // Move the object to the pivot point

            // 1.1. SUBTRACT the the pivot point from your object's original position
            // Apply your rotation
            // Move the object BACK by the same position vector

            // 1.1. ADD the the pivot point to your object's new position
            // cube.rotation.x += 0.01 * Math.PI;
            // cube.rotation.y += 0.01;

            renderer.render( scene, camera );
        };

        animate();
    }    
}
