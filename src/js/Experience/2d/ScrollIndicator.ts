import { Experience } from "Experience/Main";

class ScrollIndicator {
    experience = new Experience();
    scroll = this.experience.scroll;
    scrollIndicator = document.querySelector<HTMLElement>(
        ".scroll-indicator",
    )!;

    update() {
        this.scrollIndicator.style = `opacity: ${Math.max(1 - this.scroll.scrollY / 200, 0)}`;
    }
}

export { ScrollIndicator };
