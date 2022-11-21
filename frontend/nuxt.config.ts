import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
    },
  },
  app: {
    head: {
      title: "Nuxt3-Typescript-Express-MySQL-Redis Authentication example",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "A Nux3-Express-Typescript-MySQL-Redis Authentication example" },
      ],
    },
  },
});
