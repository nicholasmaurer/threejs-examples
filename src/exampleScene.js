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

        var animate = function () {
            requestAnimationFrame( animate );
            // Move the object to the pivot point

            cube.rotation.x += 0.01 * Math.PI;
            cube.rotation.y += 0.01;

            renderer.render( scene, camera );
        };

        animate();
    }    
}
