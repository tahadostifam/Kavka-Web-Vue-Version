<script>
import { useCurrentChatStore } from "~/stores/currentChat";
import "./NoChatSelected.scss";
export default {
  data() {
    return {
      currentChatStore: undefined,
      isSelected: undefined,
    };
  },
  mounted() {
    const currentChatStore = useCurrentChatStore();
    this.currentChatStore = currentChatStore;

    this.isSelected = currentChatStore.isSelected;
  },
};
</script>

<template>
  <div class="no_chat_selected" v-if="currentChatStore">
    <span v-if="!isSelected">No chat selected!</span>
  </div>
</template>
