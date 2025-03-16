import { Experience } from "../Experience";

class Timeline {
    constructor() {
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scroll = this.experience.scroll;

        this.scroller = document.querySelector(".scroller");
    }

    update() {
        const scrollerOffsetTop = this.scroller.offsetTop;
        const scrollerHeight = this.scroller.offsetHeight;
        const distance =
            this.scroll.scrollY +
            this.sizes.height -
            scrollerOffsetTop;
        const percentage =
            distance / (this.sizes.height / 10 + scrollerHeight);
        document.body.style.setProperty("--scroll", percentage);
    }
}

export { Timeline };
