import { PerspectiveCamera } from "three";
import { Experience } from "../Experience";

class Camera {
    constructor() {
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.scroll = this.experience.scroll;

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
