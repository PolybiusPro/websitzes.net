import { EventEmitter } from "node:events";
import { Timer } from "three";

class Time extends EventEmitter {
    timer: Timer;
    elapsed = 0;
    delta = 0;

    constructor() {
        super();

        this.timer = new Timer();

        window.requestAnimationFrame(() => {
            this.tick();
        });
    }
    tick() {
        this.timer.update();
        this.elapsed = this.timer.getElapsed();
        this.delta = this.timer.getDelta();

        this.emit("tick");

        window.requestAnimationFrame(() => {
            this.tick();
        });
    }
}

export { Time };
