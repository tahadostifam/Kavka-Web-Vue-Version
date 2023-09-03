<script setup>
import "@/assets/stylesheets/theme.scss";
import { useTheme } from 'vuetify';
import { useThemesStore } from "./stores/theme";
import { storeToRefs } from "pinia";

const theme = useTheme();
const themesStore = useThemesStore();
const { darkMode } = storeToRefs(themesStore);

watch(darkMode, (value) => {
  console.log("Vuetify darkMode: " + value);
  theme.global.name.value = (value == true) ? 'myCustomDarkTheme' : 'myCustomLightTheme';
});
</script>

<template>
  <v-app>
    <v-main>
      <NuxtPage />
    </v-main>
  </v-app>
</template>
