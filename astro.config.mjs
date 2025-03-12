// @ts-check
import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
    integrations: [icon(), (await import("astro-compressor")).default()],
    vite: {
        ssr: {
            external: ["svgo"],
        },
    },
});