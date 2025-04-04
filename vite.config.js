import restart from "vite-plugin-restart";
import twig from "@vituum/vite-plugin-twig";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default {
    root: "src/", // Sources files (typically where index.html is)
    publicDir: "../static/", // Path from "root" to static assets (files that are served as they are)
    server: {
        host: true, // Open to local network and display URL
        open: !(
            "SANDBOX_URL" in process.env ||
            "CODESANDBOX_HOST" in process.env
        ), // Open if it's not a CodeSandbox
    },
    build: {
        outDir: "../dist", // Output in the dist/ folder
        emptyOutDir: true, // Empty the folder first
        sourcemap: true, // Add sourcemap
        rollupOptions: {
            input: ["src/index.twig.html"],
        },
    },
    plugins: [
        restart({ restart: ["../static/**"] }), // Restart server on static file change
        twig({
            globals: {
                date: new Date(),
            },
        }),
        nodePolyfills({
            include: ["events"],
        }),
    ],
    resolve: {
        alias: {
            Experience: "/js/Experience",
        },
    },
};
