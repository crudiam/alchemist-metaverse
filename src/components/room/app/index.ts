import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
// import { OrbitControls }  from 'three/examples/jsm/controls/OrbitControls'
import {DRACOLoader} from 'three/examples/jsm/loaders/DRACOLoader'
import * as THREE from "three";
import { setupMouseListeners } from './mouse';


export const DIMENTIONS = {
    HEIGHT: window.innerHeight,
    WIDTH: window.innerWidth
};

const ASSET_PATH = '/assets/alchemists_table.gltf';


function initializeLoader() {
    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath( '/examples/js/libs/draco/' );
    loader.setDRACOLoader( dracoLoader );
    return loader;
}

function loadAssets(scene) {

    const onAssetsLoaded = (gltf) => {
        const obj = gltf.scene;
        obj.position.set(0, 0, 0);
        scene.add(obj);
    };

    const loader = initializeLoader();
    loader.load(ASSET_PATH, onAssetsLoaded);
}

function loop(renderer, scene, camera) {

    const animate = () => {
        /**
         * @todo: lower the fps to reduce the load
         */
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    };

    return animate;
}


function configureApp(renderer, camera, scene) {
    renderer.physicallyCorrectLights = true;
    renderer.gammaOutput = true;
    renderer.setSize(DIMENTIONS.WIDTH, DIMENTIONS.HEIGHT);

    /**
     * @todo: setup keyboard listeners as well.
     * @todo: clear all of the listeners once the app is done.
     */

    const clearMouseListeners = setupMouseListeners(camera, scene);
}


export function start() {
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer();

    /**
     * this part will be removed!
     * @todo: define the cameras on GLTF file.
     */
    const camera = new THREE.PerspectiveCamera(60, DIMENTIONS.WIDTH / DIMENTIONS.HEIGHT, 0.1, 800 );
    camera.position.set(-0.1, 0.5, 1.2);

    configureApp(renderer, camera, scene);
    loadAssets(scene);
    loop(renderer, scene, camera)();
}