// @ts-check
import { defineConfig } from 'astro/config';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    integrations: [icon()],
    vite: {
        ssr: {
            external: ["svgo"],
        },
        build: {
            rollupOptions: {
                external: ["/frontphoto.jpeg", "/backphoto-left.jpg", "/backphoto-right-3.jpg", "/chess.3757adde.svg"],
            },
        },
    },
});