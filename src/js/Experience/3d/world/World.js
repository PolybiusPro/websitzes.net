import { Experience } from "../../Experience";
import { Shapes } from "./Shapes";

class World {
    constructor() {
        this.experience = new Experience();
        this.resources = this.experience.resources;

        this.resources.on("ready", () => {
            // Setup
            this.shapes = new Shapes();
        });
    }
    update() {
        if (this.shapes) {
            this.shapes.update();
        }
    }
}

export { World };
