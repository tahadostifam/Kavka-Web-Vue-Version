// https://nuxt.com/docs/api/configuration/nuxt-config
import { ThemeDefinition } from "vuetify";

const primaryColor = "#1759F3";

const myCustomDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: primaryColor,
    secondary: "#050505",
    background: "#050505",
    surface: "#0E0E0E",
  }
};

export default defineNuxtConfig({
  appConfig: {

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
      // automatically imports `defineStore`
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
