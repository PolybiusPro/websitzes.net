import { PerspectiveCamera } from "three";
import { Experience } from "Experience/Main";

class Camera {
    experience = new Experience();
    sizes = this.experience.sizes;
    scene = this.experience.scene;
    canvas = this.experience.canvas;
    scroll = this.experience.scroll;
    instance!: PerspectiveCamera;

    constructor() {
        this.setInstance();
    }

    setInstance() {
        this.instance = new PerspectiveCamera(
            45,
            this.sizes.width / this.sizes.height,
            0.01,
            100,
        );
        this.instance.position.z = 6;
        this.scene.add(this.instance);
    }

    resize() {
        this.instance.aspect = this.sizes.width / this.sizes.height;
        this.instance.updateProjectionMatrix();
    }

    update() {
        this.instance.position.y =
            (-this.scroll.scrollY / this.sizes.height) * 6;
    }
}

export { Camera };
