import { EventEmitter } from "node:events";

class Scroll extends EventEmitter {
    constructor() {
        super();

        this.scrollY = window.scrollY;

        window.addEventListener("scroll", () => {
            this.scrollY = window.scrollY;
            this.emit("scroll");
        });
    }
}

export { Scroll };
