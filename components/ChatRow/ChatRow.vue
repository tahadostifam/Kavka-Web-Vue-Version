<script>
import "./ChatRow.scss";
export default {
    props: ['type', 'avatar', 'name', 'online', 'lastMessage', 'active'],
    data() {
        return {
            randomAvatarColors: ["primary", "brown-lighten-2", "blue-grey-darken-2", "pink-lighten-1", "purple-lighten-2", "red-darken-1", "cyan-lighten-3", "teal-lighten-3"]
        }
    },
    methods: {
        getRandomAvatarColor() {
            return this.$data.randomAvatarColors[Math.floor(Math.random() * this.$data.randomAvatarColors.length)];
        }
    },
};
</script>

<template>
    <div :class="['chat_row_item', active ? 'chat_row_item_active' : undefined]">
        <div v-if="avatar" class="chat_row_avatar">
            <img :src="avatar" />
            <span class="chat_row_online"></span>
        </div>
        <v-avatar v-else size="55" :color="getRandomAvatarColor()" class="mr-3">
            <span class="text-h5">{{ name[0] }}</span>
        </v-avatar>

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
