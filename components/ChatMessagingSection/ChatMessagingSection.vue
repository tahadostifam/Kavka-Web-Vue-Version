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
      textInput: "",
      isChatOptionsOpen: false,
      messagesLoaded: false,
      // Current Chat
      currentChatStore: useCurrentChatStore(),
    };
  },
  mounted() {
    setTimeout(() => {
      this.$data.messagesLoaded = true;
    }, 1500);
  },
  methods: {
    openEmojiBox() {
      alert("Not implement yet");
    }
  },
};
</script>

<template>
  <div class="chat_messaging_section">
    <div height="var(--chat-header-height)" class="chat_header d-flex align-center justify rounded-0 px-2">
      <div class="d-flex justify-space-between" style="width: 100%">
        <div class="d-flex align-center">
          <v-btn v-on:click="currentChatStore.clearCurrentChat()" class="rounded-circle mr-2 back_of_chat_button" variant="text"
            icon="mdi-arrow-left"></v-btn>

          <v-avatar class="mr-3 rounded-lg" size="large">
            <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
          </v-avatar>
          <div>
            <h1 class="chat-header-title">Software Devs.js</h1>
            <span class="chat-header-subtitle">21 Members</span>
          </div>
        </div>

        <div class="d-flex align-center justify-end">
          <v-btn class="rounded-circle" variant="text" icon="mdi-phone"></v-btn>
          <v-btn class="rounded-circle mr-3" variant="text" icon="mdi-video"></v-btn>

          <v-menu :close-on-content-click="false" class="custom_menu custom_menu-blurred" transition="scale-transition"
            location="top end" v-model="isChatOptionsOpen">
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" class="rounded-circle" variant="text" icon="mdi-dots-vertical"></v-btn>
            </template>

            <v-list class="mt-5 mr-0">
              <v-list-item>
                <v-list-item-title>
                  <v-icon icon="mdi-bookmark-outline"> </v-icon> Saved Messages</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title><v-icon icon="mdi-account-outline"> </v-icon> Contacts</v-list-item-title>
              </v-list-item>

              <v-list-item color="danger">
                <v-list-item-title><v-icon icon="mdi-cog-outline"> </v-icon> Settings</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
    </div>

    <div class="chat_messaging_section_container">

      <SimpleBar class="bubbles_container">
        <SplitLoader v-if="!messagesLoaded" style="position: absolute;"/>

        <div class="bubbles">
          <MessageBubble :caption="'Hello World'" :isRTL="false" />
          <MessageBubble :specialContentUrl="'http://localhost:3000/wallpaper1.jpg'"
            :caption="'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. '"
            :isRTL="false" />

          <MessageBubble :specialContentUrl="'http://localhost:3000/wallpaper2.jpg'" :caption="''" :isRTL="true" />
          <MessageBubble :caption="'سلام!'" :isRTL="true" />
          <MessageBubble :caption="'خوبی؟'" :isRTL="true" />
        </div>
      </SimpleBar>

      <div class="chat_input">
        <div class="chat_input_input_box pa-1">
          <div class="d-flex">
            <v-btn :disabled="!messagesLoaded" :ripple="false" variant="plain" class="rounded-sm" icon="mdi-emoticon-outline"></v-btn>
          </div>

          <input :disabled="!messagesLoaded" v-model="textInput" v-on:input="textInputChange" type="text"
            placeholder="Write something..."/>

          <div class="d-flex">
            <v-btn :disabled="!messagesLoaded" :ripple="false" variant="plain" class="rounded-sm" icon="mdi-paperclip"></v-btn>
            <v-btn :disabled="!messagesLoaded" color="primary" class="rounded-sm" icon="mdi-microphone"></v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
