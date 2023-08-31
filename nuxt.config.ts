// https://nuxt.com/docs/api/configuration/nuxt-config
import { ThemeDefinition } from "vuetify";

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#0ba946",
    secondary: "#707579"
  }
};

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@invictus.codes/nuxt-vuetify'
  ],
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'myCustomLightTheme',
        themes: { myCustomLightTheme }
      },
      defaults: {
        VTextField: {
          rounded: 'sm'
        }
      }
    }
  }
});
