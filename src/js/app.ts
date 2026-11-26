import "/styles.scss";
import "bootstrap/js/dist/drawer.js";
import { Experience } from "Experience/Main";

const canvas = document.querySelector<HTMLCanvasElement>("canvas.webgl");
if (!canvas) {
    throw new Error("canvas.webgl not found");
}

new Experience(canvas);
