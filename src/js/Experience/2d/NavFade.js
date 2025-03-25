import { Experience } from "Experience/Main";

class NavFade {
    constructor() {
        this.experience = new Experience();
        this.scroll = this.experience.scroll;
        this.navbar = document.querySelector(".navbar");
    }

    update() {
        if (this.scroll.scrollY <= 200) {
            this.navbar.style = `background-color: rgba(0, 0, 51, ${this.scroll.scrollY / 200})`;
        } else {
            this.navbar.style = "background-color: rgb(0, 0, 51)";
        }
    }
}

export { NavFade };
