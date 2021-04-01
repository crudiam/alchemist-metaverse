import React, { Component } from 'react';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
// import { OrbitControls }  from 'three/examples/jsm/controls/OrbitControls'
import {DRACOLoader} from 'three/examples/jsm/loaders/DRACOLoader'
import * as THREE from "three";


interface Props {
    onDocumentationClick: () => void;
}

class SampleThreeEnv extends Component<Props> {

    private mount;

    state = {
        isSpellBookHovered: false,
        isStackedBooksHovered: false,
        isPotionsHovered: false,
        displaySpellBook: false,
        displayFAQ: false,
    }


    handleMouseDown = () => {
        if (this.state.isSpellBookHovered) {
            this.setState({ displaySpellBook: true, isSpellBookHovered: false, isStackedBooksHovered: false  });
            this.props.onDocumentationClick();
        } else if (this.state.isStackedBooksHovered) {
            this.setState({ displayFAQ: true, isStackedBooksHovered: false, isSpellBookHovered: false });
            this.props.onDocumentationClick();
        }
    }

 

    componentDidMount() {

        const loader = new GLTFLoader();

        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();
        raycaster.layers.enable(1)
        const hoveredObjects = {};
        
        const onMouseMove = ( event ) => {
            // if (this.state.displaySpellBook) {
            //     return;
            // }

            // mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
            // mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

            // raycaster.setFromCamera( mouse, camera );
            // const intersects = raycaster.intersectObjects( scene.children, true );
            // const hoveredObjectUuids = intersects.map(el => el.object.name);


            // for (let i = 0; i < intersects.length; i++) {
            //     const current = intersects[i].object;

            //     if (hoveredObjects[current.name]) {
            //         continue; // was hovered before
            //     }

            //     if (current.name === 'open_book_2') {
            //         this.setState({ isSpellBookHovered: true });
            //         current.position.z -=0.1;
            //     }

            //     if (current.name.includes('Cube')) {
            //         this.setState({ isStackedBooksHovered: true });
            //         current.position.z -=0.1;
            //     }

            //     hoveredObjects[current.name] = current;
            // }

            // for (let name of Object.keys(hoveredObjects)) {
            //     let idx = hoveredObjectUuids.indexOf(name);
            //     if (idx === -1) {

            //         if (name === 'open_book_2') {
            //             this.setState({ isSpellBookHovered: false });
            //             let current = hoveredObjects[name];

            //             current.position.z += 0.1;
            //         }
                    
            //         if (name.includes('Cube')) {
            //             this.setState({ isStackedBooksHovered: false });
            //             let current = hoveredObjects[name];
            //             current.position.z +=0.1;
            //         }
            //         delete hoveredObjects[name];
            //     }

            // }

        }


        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath( '/examples/js/libs/draco/' );
        loader.setDRACOLoader( dracoLoader );
        
        var scene = new THREE.Scene();
        var renderer = new THREE.WebGLRenderer();
        renderer.physicallyCorrectLights = true;
        renderer.gammaOutput = true;


        var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 800 );
      
        camera.position.set(-0.1, 0.5, 1.2);

        renderer.setSize( window.innerWidth, window.innerHeight );
        this.mount.appendChild( renderer.domElement );

        document.addEventListener('mousemove', onMouseMove, false );
        document.addEventListener('mousedown', this.handleMouseDown);

        loader.load('/assets/alchemists_table.gltf', (gltf) => {
            const obj = gltf.scene;
            obj.position.set(0, 0, 0);
            scene.add(obj);
        });


        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render( scene, camera );
        }


        animate();
    }


    renderCrucibleMessage() {
        return (
            <h1 style={{ position: 'absolute', right: 50, top: 50, color: 'white'}}>
                Crucible Book
            </h1>
        );
    }
    
    renderDocumentationMessage() {
        return (
            <h1 style={{ position: 'absolute', right: 50, top: 50, color: 'white'}}>
                FAQ
            </h1>
        );
    }

    render() {


        return (
            <div>
                {this.state.isSpellBookHovered && this.renderCrucibleMessage()}
                {this.state.isStackedBooksHovered && this.renderDocumentationMessage()}
                <div ref={ref => (this.mount = ref)} />
            </div>
        )
    }

}


export default SampleThreeEnv;