import { Scene } from "three";
import { Sizes } from "Experience/utils/Sizes";
import { Time } from "Experience/utils/Time";
import { Scroll } from "Experience/utils/Scroll";
import { Renderer } from "Experience/3d/Renderer";
import { Camera } from "Experience/3d/Camera";
import { Resources } from "Experience/utils/Resources";
import { World } from "Experience/3d/world/World";
import sources from "Experience/3d/sources";
import { Timeline } from "Experience/2d/Timeline";
import { Fade } from "Experience/2d/Fade";
import { ScrollIndicator } from "Experience/2d/ScrollIndicator";
import { NavFade } from "Experience/2d/NavFade";

let instance: Experience | null = null;

class Experience {
    // Assigned on first creation. Later calls return the existing instance
    // early, which TypeScript can't see, hence the definite assignments.
    canvas!: HTMLCanvasElement;
    sizes!: Sizes;
    time!: Time;
    scroll!: Scroll;
    resources!: Resources;
    scene!: Scene;
    camera!: Camera;
    renderer!: Renderer;
    world!: World;
    navFade!: NavFade;
    fade!: Fade;
    timeline!: Timeline;
    scrollIndicator!: ScrollIndicator;

    // The first call creates the singleton and needs a canvas. Later calls
    // return that same instance and ignore the argument.
    constructor(canvas?: HTMLCanvasElement) {
        if (instance) {
            return instance;
        }

        if (!canvas) {
            throw new Error("Experience needs a canvas on first creation");
        }

        instance = this;

        this.canvas = canvas;

        // Util setup
        this.sizes = new Sizes();
        this.time = new Time();
        this.scroll = new Scroll();
        this.resources = new Resources(sources);
        // 3D Setup

        this.scene = new Scene();

        this.camera = new Camera();
        this.renderer = new Renderer();
        this.world = new World();

        // 2D Setup
        this.navFade = new NavFade();
        this.fade = new Fade();
        this.timeline = new Timeline();
        this.scrollIndicator = new ScrollIndicator();

        this.sizes.on("resize", () => {
            this.resize();
        });

        this.time.on("tick", () => {
            this.update3d();
        });
        this.scroll.on("scroll", () => {
            this.update2d();
        });
    }
    resize() {
        this.camera.resize();
        this.renderer.resize();
    }
    update3d() {
        this.camera.update();
        this.world.update();
        this.renderer.update();
    }
    update2d() {
        this.navFade.update();
        this.fade.update();
        this.timeline.update();
        this.scrollIndicator.update();
    }
}

export { Experience };
