import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';
import { Scene, Mesh, MeshMatCapMaterial } from 'three';

const navbar = document.getElementById('navbar');
const scrollNotify = document.getElementById('scroll-notify');

window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY;
    console.log(window.innerHeight);
    if (window.scrollY <= 200) {
        navbar.style = `background-color: rgba(34, 34, 34, ${
            scrollPos / 200
        })`;
        scrollNotify.style = `opacity: ${1 - scrollPos / 200}`;
    } else {
        navbar.style = 'background-color: rgb(34,34,34)';
    }
});

// Get canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
