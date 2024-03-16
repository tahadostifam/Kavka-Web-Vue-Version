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
            messageClassList: "message_bubble_content ",
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
        if (this.$props.specialContentUrl) {
            const fileType = await getFileTypeFromHeader(this.$props.specialContentUrl)

            if (fileType.includes("image")) {
                this.$data.messageType = "image"
                this.$data.showCaption = true
            }
            else if (fileType.includes("audio")) {
                this.$data.messageType = "audio"
                this.$data.showCaption = false
            }
            else if (fileType.includes("video")) {
                this.$data.messageType = "video"
                this.$data.showCaption = true
            }
            else {
                this.$data.messageType = "file"
                this.$data.showCaption = true
            }

            this.$data.messageClassList += 'message_bubble_' + this.$data.messageType + ' ';
        } else {
            this.$data.messageType = "text"
            this.$data.showCaption = true
        }

        if (this.$props.caption.trim().length == 0) {
            this.$data.showCaption = false
        }

        // collect class list
        if (this.$data.showCaption == false) {
            this.$data.messageClassList += 'message_bubble_no_caption ';
        }
    }
}
</script>

<template>
    <div :class="($props.isRTL == true ? 'message_bubble_rtl' : '') + ' message_bubble_row'">
        <div class="message_bubble d-flex">
            <v-avatar v-if="$props.isRTL == false" class="mr-3 message_bubble_user_avatar" size="55">
                <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
            </v-avatar>

            <div :class="$data.messageClassList">
                <h2 v-if="$props.isRTL == false" class="message_bubble_sender_username">John Doe</h2>

                <img v-if="$data.messageType == 'image'" :src="$props.specialContentUrl">

                <!-- message caption -->
                <div class="message_bubble_caption" v-if="showCaption">
                    {{ caption }}
                </div>
            </div>
        </div>
    </div>
</template>
