<script>
export default {
    props: ["navList", "handleChangeWindow"],
}
</script>
<template>
    <v-card>
        <v-card-title class="d-flex justify-space-between align-center pa-3 ">
            <div class="text-h5 ps-3">Settings</div>

            <v-btn @click="uiState.isSettingsDialogActive = false" icon="mdi-close" variant="text"></v-btn>
        </v-card-title>

        <v-card-text class="pt-0">
            <div class="d-flex align-start">
                <UserAvatar color="primary" class="mr-3 rounded-sm" size="130">
                    <!-- <span class="text-h5">{{ authStore.getFullName()[0] }}</span> -->
                    <span class="text-h5">John Doe</span>
                </UserAvatar>

                <div class="d-flex flex-column pl-3">
                    <h2 class="mb-1">John Doe</h2>
                    <span class="mb-2">johndoe@kavka.social</span>
                    <span class="text-grey">@johndoe</span>
                </div>
            </div>
        </v-card-text>

        <v-divider class="mt-3" />

        <div style="overflow: auto;">
            <v-list class="mt-3 px-3">
                <v-list-item @click="handleChangeWindow(item.to)" v-for="item in navList">
                    <v-list-item-title><v-icon :icon="item.icon"></v-icon> {{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>

            <v-divider class="mt-3" />

            <v-list class="mt-3 px-3">
                <v-list-item>
                    <v-list-item-title><v-icon icon="mdi-help-circle-outline"></v-icon> Kavka
                        FAQ</v-list-item-title>
                </v-list-item>

                <v-list-item>
                    <v-list-item-title><v-icon icon="mdi-lightbulb-outline"></v-icon> Kavka
                        Features</v-list-item-title>
                </v-list-item>

                <v-list-item href="https://github.com/kavkaco/Bug-Report">
                    <v-list-item-title><v-icon icon="mdi-bug"></v-icon> Report Bug</v-list-item-title>
                </v-list-item>
            </v-list>
        </div>
    </v-card>
</template>