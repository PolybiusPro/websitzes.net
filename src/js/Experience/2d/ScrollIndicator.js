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
        if (this.scroll.scrollY <= 200) {
            this.scrollIndicator.style = `opacity: ${1 - this.scroll.scrollY / 200}`;
        }
    }
}

export { ScrollIndicator };
