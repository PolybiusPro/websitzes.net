import { EventEmitter } from "node:events";
import { Clock } from "three";

class Time extends EventEmitter {
    constructor() {
        super();

        this.clock = new Clock();
        this.timestamp = 0;

        window.requestAnimationFrame(() => {
            this.tick();
        });
    }
    tick() {
        this.elapsed = this.clock.getElapsedTime();
        this.delta = this.elapsed - this.timestamp;
        this.timestamp = this.elapsed;

        this.emit("tick");

        window.requestAnimationFrame(() => {
            this.tick();
        });
    }
}

export { Time };
