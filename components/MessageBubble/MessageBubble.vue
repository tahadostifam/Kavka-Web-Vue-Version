<script>
import "./MessageBubble.scss"

async function getFileTypeFromHeader(url) {
  const response = await fetch(url, { method: 'HEAD' });
  const contentType = response.headers.get('Content-Type');
  return contentType;
}

export default {
    data() {
        return {
            messageClassList: "message_bubble ",
            caption: "",
            showCaption: false,
            imageUrl: undefined,
            messageType: "text"
        }
    },
    props: {
        isRTL: Boolean,
        caption: String,
        specialContentUrl: String | undefined
    },
    async mounted() {
        if (this.$props.isRTL) {
            this.$data.messageClassList += "message_bubble_rtl "
        }
        if (this.$props.specialContentUrl) {
            const fileType = await getFileTypeFromHeader(this.$props.specialContentUrl)

            if (fileType.includes("image")){
                this.$data.messageType = "image"
                this.$data.showCaption = true
            }
            else if (fileType.includes("audio")){
                this.$data.messageType = "audio"
                this.$data.showCaption = false
            }
            else if (fileType.includes("video")){
                this.$data.messageType = "video"
                this.$data.showCaption = true
            }
            else {
                this.$data.messageType = "file"
                this.$data.showCaption = true
            }
        } else {
            this.$data.messageType = "text"
            this.$data.showCaption = true
        }
    }
}
</script>

<template>
    <div :class="$data.messageClassList + 'd-flex '">
        <v-avatar class="mr-3 message_bubble_user_avatar" color="primary" size="55">
            <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
        </v-avatar>

        <div class="message_bubble_content">
            <h2 class="message_bubble_sender_username">John Doe</h2>

            <!-- define message types -->
            <div class="message_bubble_image" v-if="$data.messageType == 'image'">
                <img :src="$props.specialContentUrl">
            </div>

            <!-- message caption -->
            <div :class="($data.messageType == 'image' ? 'message_type_image ' : '') + 'message_bubble_caption'"
                v-if="showCaption && $props.caption.trim().length > 0">
                {{ caption }}
            </div>
        </div>
    </div>
</template>
