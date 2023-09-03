<script>
import SimpleBar from "simplebar-vue";
import "simplebar-vue/dist/simplebar.min.css";
import useCurrentChatStore from "~/stores/current_chat";
import "./ChatMessagingSection.scss";

export default {
  components: {
    SimpleBar,
  },
  data() {
    return {
      isChatOptionsOpen: false,
      // Current Chat
      currentChatStore: undefined,
      isSelected: undefined,
    };
  },
  methods: {
    openEmojiBox() {
      alert("Not implement yet");
    },
  },
  mounted() {
    const currentChatStore = useCurrentChatStore();
    this.currentChatStore = currentChatStore;

    this.isSelected = currentChatStore.isSelected;
  },
};
</script>

<template>
  <!-- :class="currentChat.selected ? 'isOpen' : undefined" -->
  <div
    class="chat_messaging_section"
    v-if="currentChatStore"
    :class="isSelected ? 'chat_messaging_section_show' : undefined"
  >
    <v-card
      height="var(--chat-header-height)"
      class="chat_header d-flex align-center justify rounded-0 px-4"
    >
      <div class="d-flex justify-space-between" style="width: 100%">
        <div class="d-flex align-center">
          <v-avatar class="mr-3" color="primary" size="large">
            <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
          </v-avatar>
          <div>
            <h1 class="text-subtitle-1 font-weight-bold">Software Devs.js</h1>
            <span class="text-caption">21 Members</span>
          </div>
        </div>

        <div class="d-flex align-center justify-end">
          <v-menu
            :close-on-content-click="false"
            class="custom_menu custom_menu-blurred"
            transition="scale-transition"
            location="top end"
            v-model="isChatOptionsOpen"
          >
            <template v-slot:activator="{ props }">
              <v-btn
                v-bind="props"
                class="rounded-circle"
                variant="text"
                icon="mdi-dots-vertical"
              ></v-btn>
            </template>

            <v-list class="mt-5 mr-0">
              <v-list-item>
                <v-list-item-title>
                  <v-icon icon="mdi-bookmark-outline"> </v-icon> Saved Messages</v-list-item-title
                >
              </v-list-item>

              <v-list-item>
                <v-list-item-title
                  ><v-icon icon="mdi-account-outline"> </v-icon> Contacts</v-list-item-title
                >
              </v-list-item>

              <v-list-item color="danger">
                <v-list-item-title
                  ><v-icon icon="mdi-cog-outline"> </v-icon> Settings</v-list-item-title
                >
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
    </v-card>

    <div class="chat_messaging_section_container">
      <SimpleBar class="bubbles_container">
        <div class="bubbles">
          <MessageBubble v-for="item in 3" />
        </div>
      </SimpleBar>

      <div class="chat_input">
        <v-text-field
          density="compact"
          variant="solo"
          color="primary"
          label="Message"
          prepend-inner-icon="mdi-emoticon-outline"
          append-inner-icon="mdi-paperclip"
          single-line
          hide-details
          @click:prepend-inner="openEmojiBox"
          @click:append-inner="openEmojiBox"
        >
        </v-text-field>
        <v-btn flat color="primary" class="rounded-circle mr-4" icon="mdi-microphone"></v-btn>
      </div>
    </div>
  </div>
</template>
