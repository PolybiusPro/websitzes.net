import { EventEmitter } from "node:events";

class Sizes extends EventEmitter {
    width: number;
    height: number;
    pixelRatio: number;

    constructor() {
        super();

        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.pixelRatio = Math.min(window.devicePixelRatio, 3);

        window.addEventListener("resize", () => {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            this.pixelRatio = Math.min(window.devicePixelRatio, 3);
            this.emit("resize");
        });
    }
}

export { Sizes };
