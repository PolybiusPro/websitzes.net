import { Experience } from "Experience/Main";
import { Shapes } from "Experience/3d/world/Shapes";

class World {
    experience = new Experience();
    resources = this.experience.resources;
    shapes?: Shapes;

    constructor() {
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
