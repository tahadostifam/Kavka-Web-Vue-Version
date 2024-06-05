// https://nuxt.com/docs/api/configuration/nuxt-config
import { ThemeDefinition } from "vuetify";

const primaryColor = "#1759F3";

const myCustomDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: primaryColor,
    secondary: "#050505",
    background: "#050505",
    surface: "#161616",
  }
};

export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@use "@/assets/style/theme.scss" as *;'
        }
      }
    }
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: 'width=device-width, initial-scale=1',
      title: "Kavka",
      meta: [
        { name: "description", content: "Secure and Private Chat Application." },
      ],
    }
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  modules: [
    '@invictus.codes/nuxt-vuetify',
    '@pinia/nuxt'
  ],
  pinia: {
    autoImports: [
      'defineStore',
    ],
  },
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'myCustomDarkTheme',
        themes: { myCustomDarkTheme }
      },
      defaults: {
        VTextField: {
          rounded: 'sm'
        }
      }
    }
  }
});
