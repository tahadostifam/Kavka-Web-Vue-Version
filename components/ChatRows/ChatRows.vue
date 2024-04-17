<script lang="ts">
import useCurrentChatStore from "~/stores/current_chat"
import "./ChatRows.scss";
import useAuthStore from '~/stores/auth';
import { IChat } from "~/api/chat/chat.model";

export default {
  data() {
    return {
      authStore: useAuthStore(),
      currentChatStore: useCurrentChatStore(),
      chatsList: [],
    };
  },
  mounted() {
    this.$data.authStore.chats!.forEach((item) => {
      (this.$data.chatsList as any[]).push({
        active: false,
        ...item,
      })
    })
    console.log(this.$data.chatsList);
    
  },
  methods: {
    handleChatSelected(chat: IChat) {
      const sampleChat = {
        channelType: "channel",
        chatCaption: "",
        chatID: "chat-id",
        chatTitle: "Chat Title",
        messages: []
      };
      this.$data.currentChatStore.setCurrentChat(sampleChat)
    },
  }
};
</script>

<template>
  <div class="chat_rows mt-3">
    <div class="chat_rows_list">
      <ChatRow
      v-on:click="handleChatSelected(item)"
      v-for="(item, index) in chatsList"
        :key="index"
        :name="(item as IChat).chatDetail.title"
        :online="false"
        :lastMessage="item"
        :avatar="undefined"
        :active="(item as any).active"
      />
    </div>
  </div>
</template>
