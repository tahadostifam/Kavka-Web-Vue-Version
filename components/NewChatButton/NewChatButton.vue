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
  <v-menu class="custom-menu" transition="scale-transition" location="bottom end">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" class="new_chat_button rounded-circle" flat color="primary">
        <v-icon v-if="props.isActive" icon="mdi-close"></v-icon>
        <v-icon v-else icon="mdi-pen"></v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item>
        <v-list-item-title>New Channel</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>New Group</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>New Private Chat</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
