<script>
import "./ChatRow.scss";
export default {
    props: ['avatar', 'name', 'online', 'lastMessage', 'active']
};
</script>

<template>
    <div :class="['chat_row_item', active ? 'chat_row_item_active' : undefined]">
        <div class="chat_row_avatar">
            <img :src="avatar" />
            <span class="chat_row_online"></span>
        </div>

        <div>
            <h1 class="chat_row_user_name">{{ name }}</h1>
            <p class="chat_row_user_last_message">
                <template v-if="lastMessage.type == 'text'">
                    {{ lastMessage.content }}
                </template>

                <template v-else-if="lastMessage.type == 'image'">
                    <v-icon icon="mdi-image-area"></v-icon> {{ lastMessage.content }}
                </template>
            </p>
        </div>
    </div>
</template>
