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
    <MobileNav />

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
        <h1 class="text-red">Rooms :: Not implemented yet</h1>
      </div>

      <div id="pages" v-if="uiState.activeTab == 'pages'">
        <h1 class="text-red">Pages :: Not implemented yet</h1>
      </div>

      <div id="settings" v-if="uiState.activeTab == 'settings'">
        <h1 class="text-red">Settings :: Not implemented yet</h1>
      </div>
    </div>
  </div>
  <!-- <MainSection v-if="authStore.user != undefined" /> -->
  <!-- <SplitLoader v-else /> -->
</template>

<style lang="scss">
#chat_section {
  position: relative !important;
  width: calc(100% - var(--mini-sidebar-width));
}

.main_grid {
  --mini-sidebar-width: 90px;
  --sidebar-width: 450px;

  .main_view {
    position: relative;
    left: 0;
    width: calc(100% - var(--mini-sidebar-width));
  }

  display: grid;
  grid-template-columns: var(--mini-sidebar-width) calc(100vw - var(--mini-sidebar-width));

  .col {
    height: 100vh;
  }

  @media screen and (max-width: $bk-desktop-2) {
    // Enable mobile mode!

    &{
      grid-template-columns: 100%;
    }

    .main_view {
      width: 100%;
    }

    #chat_section {
      background: $background-color;
      position: fixed;
      width: 100vw;
      height: 100vh;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      z-index: 50;
    }
  }
}

</style>