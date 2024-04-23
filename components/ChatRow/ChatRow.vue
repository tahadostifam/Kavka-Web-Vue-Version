<script>
import "./ChatRow.scss";
export default {
    props: ['type', 'avatar', 'name', 'online', 'lastMessage', 'active'],
};
</script>

<template>
    <div :class="['chat_row_item', active ? 'chat_row_item_active' : undefined]">
        <UserAvatar :src="avatar" color="random" class="mr-3" size="55" >
            <span v-if="!avatar" class="text-h5">{{ name[0] }}</span>
        </UserAvatar>

        <div>
            <h1 class="chat_row_user_name">{{ name }}</h1>
            <p class="chat_row_user_last_message">
                <template v-if="lastMessage.type == 'text'">
                    {{ lastMessage.content.data }}
                </template>

                <!-- FIXME - after implementing media support in back-end side -->
                <!-- <template v-else-if="lastMessage.type == 'image'">
                    <v-icon icon="mdi-image-area"></v-icon> {{ lastMessage.content }}
                </template> -->
            </p>
        </div>
    </div>
</template>
