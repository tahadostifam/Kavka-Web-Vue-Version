<script>
import useCurrentChatStore from "~/stores/current_chat";
import uiState from "~/stores/ui_state";

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
  <!-- <MainSection v-if="authStore.user != undefined" /> -->
  <!-- <SplitLoader v-else /> -->
</template>

<style lang="scss">
.main_grid {
  --mini-sidebar-width: 90px;
  --sidebar-width: 450px;

  .main_view {
    width: calc(100% - var(--mini-sidebar-width));
  }

  display: grid;
  grid-template-columns: var(--mini-sidebar-width) calc(100vw - var(--mini-sidebar-width));

  .col {
    height: 100vh;
  }
}

#chat_section {
  position: relative !important;
  width: calc(100% - var(--mini-sidebar-width));
}

@media screen and (max-width: $bk-desktop-2) {
  #chat_section {
    display: block;
    position: absolute;
    z-index: 50;
    width: 100vw;
    height: 100vh;
    background: rgb($background-color);
  }
}
</style>