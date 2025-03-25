import { Experience } from "Experience/Main";
import { Shapes } from "Experience/3d/world/Shapes";

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
