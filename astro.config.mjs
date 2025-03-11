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
                external: ["/Users/lukejohnson/Documents/VsCode/LJWeb/public/frontphoto.jpeg", "/Users/lukejohnson/Documents/VsCode/LJWeb/public/backphoto-left.jpeg", "/Users/lukejohnson/Documents/VsCode/LJWeb/public/backphoto-right-3.jpeg"],
            },
        },
    },
});