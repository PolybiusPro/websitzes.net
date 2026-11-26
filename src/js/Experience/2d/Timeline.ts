import { Experience } from "Experience/Main";

class Timeline {
    experience = new Experience();
    sizes = this.experience.sizes;
    scroll = this.experience.scroll;
    scroller = document.querySelector<HTMLElement>(".scroller")!;

    update() {
        const scrollerOffsetTop = this.scroller.offsetTop;
        const scrollerHeight = this.scroller.offsetHeight;
        const distance =
            this.scroll.scrollY +
            this.sizes.height -
            scrollerOffsetTop;
        const percentage =
            distance / (this.sizes.height / 10 + scrollerHeight);
        document.body.style.setProperty("--scroll", String(percentage));
    }
}

export { Timeline };
