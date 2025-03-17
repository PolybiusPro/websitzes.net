import { Experience } from "../Experience";

class ScrollIndicator {
    constructor() {
        this.experience = new Experience();
        this.scroll = this.experience.scroll;

        this.scrollIndicator = document.querySelector(
            ".scroll-indicator",
        );
    }

    update() {
        this.scrollIndicator.style = `opacity: ${Math.max(1 - this.scroll.scrollY / 200, 0)}`;
    }
}

export { ScrollIndicator };
