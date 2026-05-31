import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  // base "./" => i percorsi sono relativi, così funziona anche in una sottocartella
  base: "./",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.png", "apple-touch-icon.png"],
      manifest: {
        name: "Rigenia Lab",
        short_name: "Rigenia",
        description: "Gestionale per laboratorio di riparazioni elettroniche",
        theme_color: "#0A0E0C",
        background_color: "#0A0E0C",
        display: "standalone",
        orientation: "portrait",
        start_url: "./",
        scope: "./",
        icons: [
          { src: "icon-192.png", sizes: "192x192", type: "image/png" },
          { src: "icon-512.png", sizes: "512x512", type: "image/png" },
          { src: "icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" }
        ]
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,svg,woff2}"],
        // alza il limite: il bundle include logo e sfondo in base64
        maximumFileSizeToCacheInBytes: 6 * 1024 * 1024
      }
    })
  ]
});
