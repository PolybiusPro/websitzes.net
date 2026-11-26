import {
    BoxGeometry,
    ConeGeometry,
    TorusGeometry,
    Mesh,
    MeshMatcapMaterial,
} from "three";
import { Experience } from "Experience/Main";

class Shapes {
    experience = new Experience();
    scene = this.experience.scene;
    resources = this.experience.resources;
    time = this.experience.time;

    cubeGeometry = new BoxGeometry(0.5, 0.5, 0.5);
    coneGeometry = new ConeGeometry(0.5, 1, 4);
    torusGeometry = new TorusGeometry(0.5, 0.2, 16, 32);
    resource = this.resources.items.neonMatcap;

    material!: MeshMatcapMaterial;
    meshes!: Mesh[];

    constructor() {
        this.setMaterials();
        this.setModels();
    }

    setMaterials() {
        this.material = new MeshMatcapMaterial({
            matcap: this.resource,
        });
    }

    setModels() {
        this.meshes = [];
        for (let i = 0; i <= 15; i++) {
            const cube = new Mesh(this.cubeGeometry, this.material);
            const cone = new Mesh(this.coneGeometry, this.material);
            const torus = new Mesh(this.torusGeometry, this.material);

            this.meshes.push(cube);
            this.meshes.push(cone);
            this.meshes.push(torus);
        }

        for (const mesh of this.meshes) {
            const scale = Math.random();
            //mesh position
            mesh.position.x = (Math.random() - 0.5) * 10;
            mesh.position.y = (Math.random() - 0.5) * 5;
            mesh.position.z = -Math.random() * 2;

            mesh.rotation.x = Math.random() * Math.PI;
            mesh.rotation.y = Math.random() * Math.PI;

            //mesh scale
            mesh.scale.set(scale, scale, scale);
            this.scene.add(mesh);
        }
    }

    update() {
        for (const mesh of this.meshes) {
            mesh.rotation.x += this.time.delta * 0.5;
            mesh.rotation.y += this.time.delta * 0.5;
        }
    }
}

export { Shapes };
