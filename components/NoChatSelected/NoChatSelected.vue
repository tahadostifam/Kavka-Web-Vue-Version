<script>
import useCurrentChatStore from "~/stores/current_chat";
import "./NoChatSelected.scss";
export default {
  data() {
    return {
      currentChatStore: undefined,
    };
  },
};
</script>

<template>
  <div class="no_chat_selected">
    <span>No chat selected!</span>
  </div>
</template>
