<script>
import { useThemesStore } from "~/stores/theme";
import "./AppMenu.scss";

export default {
  data() {
    return {
      darkModeChecked: false,
      isOpen: false,
    };
  },
  methods: {
    changeDarkModeModel() {
      const themesStore = useThemesStore();

      themesStore.setDarkMode(this.darkModeChecked);

      console.log("Dark mode set to", this.darkModeChecked);
    }
  },
};
</script>

<template>
  <v-menu :close-on-content-click="false" class="custom_menu custom_menu-blurred app_menu" transition="scale-transition" location="top end" v-model="isOpen">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" class="rounded-circle mr-4" variant="text" icon="mdi-menu"></v-btn>
    </template>

    <v-list class="mt-3 mr-4">
      <v-list-item>
        <v-list-item-title> <v-icon icon="mdi-bookmark-outline"> </v-icon> Saved Messages</v-list-item-title>
      </v-list-item>

      <v-list-item>
        <v-list-item-title><v-icon icon="mdi-account-outline"> </v-icon> Contacts</v-list-item-title>
      </v-list-item>

      <v-list-item>
        <v-list-item-title><v-icon icon="mdi-cog-outline"> </v-icon> Settings</v-list-item-title>
      </v-list-item>

      <v-list-item class="pt-0 pb-0 pr-0">
        <v-list-item-title class="app_menu_night_mode_toggler">
          <div><v-icon icon="mdi-weather-night"> </v-icon> Night mode</div>
          <div>
            <v-switch :ripple="false" v-model="darkModeChecked" @change="changeDarkModeModel" class="custom_switch mr-4" color="primary" hide-details></v-switch>
          </div>
        </v-list-item-title>
      </v-list-item>

      <v-list-item>
        <v-list-item-title><v-icon icon="mdi-github"> </v-icon> Project Source</v-list-item-title>
      </v-list-item>

      <v-list-item>
        <v-list-item-title><v-icon icon="mdi-bug-outline"> </v-icon> Report Bug</v-list-item-title>
      </v-list-item>

      <v-list-item>
        <v-list-item-title><v-icon icon="mdi-plus-circle-outline"> </v-icon> Install App</v-list-item-title>
      </v-list-item>

      <span class="app_menu_version text-medium-emphasis">Kavka Web 0.1</span>
    </v-list>
  </v-menu>
</template>
