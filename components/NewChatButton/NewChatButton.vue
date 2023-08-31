<script>
import "./NewChatButton.scss";
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<template>
  <v-menu class="custom_menu" transition="scale-transition" location="bottom end" v-model="isOpen">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" class="new_chat_button rounded-circle" flat color="primary">
        <v-scale-transition>
          <v-icon v-if="isOpen" icon="mdi-close"></v-icon>
          <v-icon v-else icon="mdi-pen"></v-icon>
        </v-scale-transition>
      </v-btn>
    </template>

    <v-list class="mb-3">
      <v-list-item>
        <v-list-item-title>
          <v-icon icon="mdi-bullhorn-outline"> </v-icon>
          New Channel
        </v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>
          <v-icon icon="mdi-account-multiple-outline"> </v-icon>
          New Group</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>
          <v-icon icon="mdi-account-outline"> </v-icon>
          New Private Chat</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
