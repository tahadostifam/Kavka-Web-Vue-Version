<script>
import useCurrentChatStore from "~/stores/current_chat";
import uiState from "~/stores/ui_state";
import "./MainSection.scss";

export default {
  data() {
    return {
      uiState,
      currentChatStore: useCurrentChatStore(),
      isSettingsDialogActive: false,
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
  <SettingsDialog />
  <div class="main_grid">
    <MiniSidebar />

    <div class="main_view">
      <div id="chat" v-if="uiState.activeTab == 'chat'">
        <Sidebar />

        <Transition name="fade">
          <div id="chat_section" class="col" v-if="$data.currentChatStore.isSelected">
            <ChatMessagingSection />
          </div>
          <NoChatSelected v-else />
        </Transition>
      </div>

      <div id="rooms" v-if="uiState.activeTab == 'rooms'">
        <h1 class="text-red">Not implemented yet</h1>
      </div>
    </div>
  </div>
</template>
