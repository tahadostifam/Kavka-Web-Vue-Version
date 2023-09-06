<script>
import "./Chat.scss";
export default {
  data() {
    return {
    }
  }
};
</script>

<template>
  <div class="chat_grid">
    <Sidebar />

    <div class="col chat_section">
      <NoChatSelected />

      <ChatMessagingSection />
    </div>
  </div>
</template>
