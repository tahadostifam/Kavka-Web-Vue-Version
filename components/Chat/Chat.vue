<script>
import "./Chat.scss";
export default {
  data() {
    return {
      currentChat: {
        selected: false,
        chatID: null
      }
    };
  }
};
</script>

<template>
  <div class="chat_grid">
    <Sidebar />

    <div class="col chat_section">
      <NoChatSelected :currentChat="this.currentChat"/>

      <ChatMessagingSection :currentChat="this.currentChat"/>
    </div>
  </div>
</template>
