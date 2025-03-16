import { TextureLoader } from "three";
import EventEmitter from "node:events";

class Resources extends EventEmitter {
    constructor(sources) {
        super();

        // Options
        this.sources = sources;

        // Setup
        this.items = {};
        this.toLoad = this.sources.length;
        this.loaded = 0;

        this.setLoaders();
        this.startLoading();
    }

    setLoaders() {
        this.loaders = {
            textureLoader: new TextureLoader(),
        };
    }

    startLoading() {
        for (const source of this.sources) {
            switch (source.type) {
                case "texture":
                    this.loaders.textureLoader.load(
                        source.path,
                        (file) => {
                            this.sourceLoaded(source, file);
                        },
                    );
                    break;

                default:
                    return;
            }
        }
    }

    sourceLoaded(source, file) {
        this.items[source.name] = file;

        this.loaded++;

        if (this.loaded === this.toLoad) {
            this.emit("ready");
        }
    }
}

export { Resources };
