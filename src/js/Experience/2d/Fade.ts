import { Experience } from "Experience/Main";

class Fade {
    experience = new Experience();
    sizes = this.experience.sizes;
    reveals = document.querySelectorAll<HTMLElement>(".reveal");

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
