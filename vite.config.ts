import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const pkgPath = fileURLToPath(new URL("./package.json", import.meta.url));
const pkg = JSON.parse(readFileSync(pkgPath, "utf-8")) as { version: string };

export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version),
  },
  server: {
    host: true,
    port: 5173,
  },
  preview: {
    host: true,
    port: 4173,
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "apple-touch-icon.svg"],
      manifest: {
        name: "TSE Assistant",
        short_name: "TSE",
        description: "TSE standartları ve fabrika ölçü kayıtları — offline",
        theme_color: "#0a0a0a",
        background_color: "#0a0a0a",
        display: "standalone",
        display_override: ["standalone", "browser"],
        orientation: "portrait",
        scope: "/",
        start_url: "/",
        lang: "tr",
        dir: "ltr",
        categories: ["business", "utilities"],
        icons: [
          {
            src: "/favicon.svg",
            sizes: "any",
            type: "image/svg+xml",
            purpose: "any",
          },
          {
            src: "/apple-touch-icon.svg",
            sizes: "180x180",
            type: "image/svg+xml",
            purpose: "any",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,woff2,webmanifest}"],
        navigateFallback: "index.html",
        navigateFallbackDenylist: [/^\/__/, /^\/[^/?]+\.[^/]+$/],
      },
    }),
  ],
});
