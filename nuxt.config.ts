// https://nuxt.com/docs/api/configuration/nuxt-config
import { ThemeDefinition } from "vuetify";

const primaryColor = "#690ab7";

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: primaryColor,
    secondary: "#707579"
  }
};

const myCustomDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: primaryColor,
    secondary: "#050505",
    background: "#050505",
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
        themes: { myCustomLightTheme, myCustomDarkTheme }
      },
      defaults: {
        VTextField: {
          rounded: 'sm'
        }
      }
    }
  }
});
