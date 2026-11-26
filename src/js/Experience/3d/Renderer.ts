import { WebGLRenderer } from "three";
import { Experience } from "Experience/Main";

class Renderer {
    experience = new Experience();
    canvas = this.experience.canvas;
    sizes = this.experience.sizes;
    scene = this.experience.scene;
    camera = this.experience.camera;
    instance!: WebGLRenderer;

    constructor() {
        this.setInstance();
    }

    setInstance() {
        this.instance = new WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
            alpha: true,
        });

        this.instance.setSize(this.sizes.width, this.sizes.height);
        this.instance.setPixelRatio(this.sizes.pixelRatio);
    }

    resize() {
        this.instance.setSize(this.sizes.width, this.sizes.height);
        this.instance.setPixelRatio(this.sizes.pixelRatio);
    }

    update() {
        this.instance.render(this.scene, this.camera.instance);
    }
}

export { Renderer };
