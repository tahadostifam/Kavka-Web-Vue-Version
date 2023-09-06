// https://nuxt.com/docs/api/configuration/nuxt-config
import { ThemeDefinition } from "vuetify";

const primaryColor = "#0ba946";

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
    secondary: "#212121",
    background: "#0F0F0F",
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
        defaultTheme: 'myCustomLightTheme',
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
