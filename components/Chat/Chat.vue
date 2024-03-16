<script>
import useCurrentChatStore from "~/stores/current_chat";
import "./Chat.scss";

export default {
  data() {
    return {
      currentChatStore: useCurrentChatStore(),
    }
  },
  mounted() {
    const currentChatStore = useCurrentChatStore();
    this.currentChatStore = currentChatStore;

    let vm = this;
    document.onkeydown = function (e) {
      e = e || window.event;
      if (e.key == "Escape") {
        vm.$data.currentChatStore.clearCurrentChat();
      }
    }
  }
};
</script>

<template>
  <div class="chat_grid">
    <Sidebar />

    <Transition name="fade">
      <div class="col chat_section" v-if="$data.currentChatStore.isSelected">
        <ChatMessagingSection />
      </div>
      <NoChatSelected v-else />
    </Transition>
  </div>
</template>
