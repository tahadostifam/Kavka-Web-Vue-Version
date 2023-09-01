<script>
import "./ChatMessagingSection.scss";
export default {
    props: "currentChat",
    methods: {
        openEmojiBox() {
            alert("Not implement yet");
        },
    }
};
</script>

<template>
  <div class="chat_messaging_section d-flex flex-column">
    <v-card class="chat_header rounded-0 pa-1 px-4">
      <div class="d-flex align-center">
        <v-avatar class="mr-3" color="primary" size="large">
          <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
        </v-avatar>
        <div>
            <h1 class="text-subtitle-1 font-weight-bold ma-0 pa-0">Software Devs.js</h1>
            <span class="text-caption ma-0 pa-0">21 Members</span>
        </div>
      </div>
    </v-card>

    <div class="bubbles">Messages</div>

    <div class="chat_input">
        <v-text-field
            density="compact"
            variant="solo"
            color="primary"
            label="Message"
            prepend-inner-icon="mdi-emoticon-outline"
            append-inner-icon="mdi-paperclip"
            single-line hide-details
            @click:prepend-inner="openEmojiBox"
            @click:append-inner="openEmojiBox">
        </v-text-field>
        <v-btn flat color="primary" class="rounded-circle mr-4" icon="mdi-microphone"></v-btn>
    </div>
  </div>
</template>
