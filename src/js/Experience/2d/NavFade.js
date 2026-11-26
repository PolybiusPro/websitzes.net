import { Experience } from "Experience/Main";

class NavFade {
    constructor() {
        this.experience = new Experience();
        this.scroll = this.experience.scroll;
        this.navbar = document.querySelector(".navbar");
    }

    update() {
        if (this.scroll.scrollY <= 200) {
            this.navbar.style = `background-color: rgba(33, 35, 41, ${this.scroll.scrollY / 200})`;
        } else {
            this.navbar.style = "background-color: rgb(33, 35, 41)";
        }
    }
}

export { NavFade };
