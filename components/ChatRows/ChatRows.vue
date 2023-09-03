<script>
import "./ChatRows.scss";
export default {
  data() {
    return {
      chatsList: [
        {
          active: true,
          name: "John Doe",
          online: true,
          lastMessage: {
            type: "image",
            content: "Take a look at this funny cat!"
          },
          avatar: "https://picsum.photos/300/300"
        },
        {
          active: false,
          name: "Jane Doe",
          online: false,
          lastMessage: {
            type: "text",
            content: "Hello Taha!"
          },
          avatar: "https://picsum.photos/300/300"
        },
      ]
    };
  },
};
</script>

<template>
  <div class="chat_rows mt-3">
    <div class="chat_rows_list">
      <ChatRow
      v-for="(item, index) in chatsList"
        :key="index"
        :name="item.name"
        :online="item.online"
        :lastMessage="item.lastMessage"
        :avatar="item.avatar"
        :active="item.active"
      />
    </div>
  </div>
</template>
