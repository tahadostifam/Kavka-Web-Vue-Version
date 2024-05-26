<script lang="ts">
import useCurrentChatStore from "~/stores/current_chat"
import "./ChatRows.scss";

export default {
  data() {
    return {
      currentChatStore: useCurrentChatStore(),
      chatsList: [] as any,
    };
  },
  mounted() {
    this.$data.chatsList.push({
      active: false, 
      chatType: "channel",
      title: "Jane Doe"
    })
    // this.$data.authStore.chats!.forEach((item) => {
    //   (this.$data.chatsList as any[]).push({
    //     active: false,
    //     ...item,
    //   })
    // })
  },
  methods: {
    handleChatSelected(chat: any) {
      const sampleChat = {
        channelType: "channel",
        chatCaption: "",
        chatID: "chat-id",
        chatTitle: "Chat Title",
        messages: []
      };
      this.$data.currentChatStore.setCurrentChat(sampleChat)
    },
    getLastMessage(item: any) {
      return "Hello..."
      // return item.messages[0];
    }
  }
};
</script>

<template>
  <div class="chat_rows mt-3">
    <div class="chat_rows_list">
      <ChatRow v-on:click="handleChatSelected(item)" v-for="(item, index) in chatsList" :key="index"
        :name="item.title" :online="false" :lastMessage="getLastMessage(item)" :avatar="undefined"
        :active="(item as any).active" :type="(item as any).chatType" />

    </div>
  </div>
</template>
