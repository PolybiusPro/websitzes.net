import { Experience } from "Experience/Main";

class Fade {
    constructor() {
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.reveals = document.querySelectorAll(".reveal");
    }
    update() {
        for (const reveal of this.reveals) {
            const elementTop = reveal.getBoundingClientRect().top;
            const elementVisible = 50;

            if (elementTop < this.sizes.height - elementVisible) {
                reveal.classList.add("visible");
            } else {
                reveal.classList.remove("visible");
            }
        }
    }
}

export { Fade };
