<script>
import "./NoChatSelected.scss";
export default {
    props: "currentChat"
};
</script>

<template>
    <div class="no_chat_selected">
        <span v-if="currentChat && !currentChat.selected">No chat selected!</span>
    </div>
</template>
