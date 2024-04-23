<script>
export default {
    props: ["class", "size", "src", "color"],
    data() {
        return {
            randomAvatarColors: ["primary", "brown-lighten-2", "blue-grey-darken-2", "pink-lighten-1", "purple-lighten-2", "red-darken-1", "cyan-lighten-3", "teal-lighten-3"],
        }
    },
    methods: {
        getRandomAvatarColor() {
            return this.$data.randomAvatarColors[Math.floor(Math.random() * this.$data.randomAvatarColors.length)];
        }
    }
}
</script>

<template>
    <v-avatar :color="color == 'random' ? getRandomAvatarColor() : color" :class="class" :size="size">
        <slot />
        <v-img v-if="src" :src="src"></v-img>
    </v-avatar>
</template>