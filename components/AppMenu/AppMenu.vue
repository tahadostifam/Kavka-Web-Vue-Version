<script>
import "./AppMenu.scss";

export default {
  data() {
    return {
      isOpen: false,
    };
  }
};
</script>

<template>
  <v-menu
    :close-on-content-click="false"
    class="custom_menu custom_menu-blurred app_menu"
    transition="scale-transition"
    location="top end"
    v-model="isOpen"
  >
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" class="rounded-circle" variant="text" icon="mdi-dots-vertical"></v-btn>
    </template>

    <v-list class="mt-5 mr-0">
      <v-list-item>
        <v-list-item-title>
          <v-icon icon="mdi-bookmark-outline"> </v-icon> Saved Messages</v-list-item-title
        >
      </v-list-item>

      <v-list-item>
        <v-list-item-title
          ><v-icon icon="mdi-account-outline"> </v-icon> Contacts</v-list-item-title
        >
      </v-list-item>

      <v-list-item>
        <v-list-item-title><v-icon icon="mdi-cog-outline"> </v-icon> Settings</v-list-item-title>
      </v-list-item>


      <v-list-item>
        <v-list-item-title><v-icon icon="mdi-github"> </v-icon> Project Source</v-list-item-title>
      </v-list-item>

      <v-list-item>
        <v-list-item-title><v-icon icon="mdi-bug-outline"> </v-icon> Report Bug</v-list-item-title>
      </v-list-item>

      <v-list-item>
        <v-list-item-title
          ><v-icon icon="mdi-plus-circle-outline"> </v-icon> Install App</v-list-item-title
        >
      </v-list-item>

      <span class="app_menu_version text-medium-emphasis">Kavka Web 0.1</span>
    </v-list>
  </v-menu>
</template>
