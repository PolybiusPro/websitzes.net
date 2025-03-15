import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';
import {
    Scene,
    Mesh,
    TextureLoader,
    MeshMatcapMaterial,
    PerspectiveCamera,
    WebGLRenderer,
    BoxGeometry,
    Clock,
    ConeGeometry,
    TorusGeometry,
} from 'three';
import { edgeTable } from 'three/examples/jsm/Addons.js';

/**
 * Scroll
 */
let scrollY = window.scrollY;

/**
 * Navbar events
 */
const navbar = document.getElementById('navbar');
const scrollNotify = document.getElementById('scroll-notify');

window.addEventListener('scroll', () => {
    scrollY = window.scrollY;
    if (scrollY <= 200) {
        navbar.style = `background-color: rgba(0, 0, 51, ${
            scrollY / 200
        })`;
        scrollNotify.style = `opacity: ${1 - scrollY / 200}`;
    } else {
        navbar.style = 'background-color: rgb(0, 0, 51)';
    }
    reveal();
    progress();
});

/**
 * Three.js
 */

// Get canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new Scene();

/**
 * Textures
 */
const textureLoader = new TextureLoader();
const matcapTexture = textureLoader.load(
    './textures/matcaps/neon.png'
);

/**
 * Mesh
 */
const objectsDistance = 4;

const cubeGeometry = new BoxGeometry(0.5, 0.5, 0.5);
const coneGeometry = new ConeGeometry(0.5, 1, 4);
const torusGeometry = new TorusGeometry(0.5, 0.2, 16, 32);

const material = new MeshMatcapMaterial({
    matcap: matcapTexture,
});

const meshes = [];

for (let i = 0; i <= 15; i++) {
    const cube = new Mesh(cubeGeometry, material);
    const cone = new Mesh(coneGeometry, material);
    const torus = new Mesh(torusGeometry, material);

    meshes.push(cube);
    meshes.push(cone);
    meshes.push(torus);
}

for (const mesh of meshes) {
    const scale = Math.random();
    //mesh position
    mesh.position.x = (Math.random() - 0.5) * 10;
    mesh.position.y = (Math.random() - 0.5) * 5;
    mesh.position.z = (Math.random() - 0.5) * 5;

    mesh.rotation.x = Math.random() * Math.PI;
    mesh.rotation.y = Math.random() * Math.PI;

    //mesh scale
    mesh.scale.set(scale, scale, scale);
    scene.add(mesh);
}

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};

window.addEventListener('resize', () => {
    // update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 3));
});

/**
 * Camera
 */
const camera = new PerspectiveCamera(
    50,
    sizes.width / sizes.height,
    0.01,
    100
);
camera.position.z = 6;
scene.add(camera);

/**
 * Renderer
 */
const renderer = new WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 3));

/**
 * Animate
 */
const clock = new Clock();
let prevTime = 0;

const tick = () => {
    const elapsedTime = clock.getElapsedTime();
    const deltaTime = elapsedTime - prevTime;
    prevTime = elapsedTime;

    camera.position.y = (-scrollY / sizes.height) * objectsDistance;

    for (const mesh of meshes) {
        mesh.rotation.x += deltaTime * 0.5;
        mesh.rotation.y += deltaTime * 0.5;
    }

    renderer.render(scene, camera);

    window.requestAnimationFrame(tick);
};

tick();

/**
 * Timeline animations
 */

const reveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    for (const reveal of reveals) {
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 50;

        if (elementTop < sizes.height - elementVisible) {
            reveal.classList.add('active');
        } else {
            reveal.classList.remove('active');
        }
    }
};

const progress = () => {
    const scroller = document.querySelector('.scroller');
    const scrollerTop = scroller.getBoundingClientRect().top;
    console.log(1 - scrollerTop / (sizes.height + 500));
    document.body.style.setProperty(
        '--scroll',
        1 - (scrollerTop - 100) / (sizes.height * 0.75)
    );
};
