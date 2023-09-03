<script setup>
import "@/assets/stylesheets/theme.scss";
import { storeToRefs } from "pinia";
import { watch } from "vue";
import { useTheme } from "vuetify";
import useThemesStore from "./stores/theme";

const vuetifyTheme = useTheme();

const themesStore = useThemesStore();
const { _darkMode } = storeToRefs(themesStore);

watch(_darkMode, (value) => {
  console.log("Vuetify darkMode: " + value);
  vuetifyTheme.global.name.value = value == true ? "myCustomDarkTheme" : "myCustomLightTheme";
});
</script>

<template>
  <v-app>
    <v-main>
      <NuxtPage />
    </v-main>
  </v-app>
</template>
