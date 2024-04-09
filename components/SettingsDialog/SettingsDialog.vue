<script>
import "./SettingsDialog.scss"
import uiState from "@/stores/ui_state"

// Import dialogs
import DefaultDialog from "./Dialogs/DefaultDialog.vue"
import MyAccount from "./Dialogs/MyAccount.vue"

export default {
    components: { DefaultDialog, MyAccount },
    data() {
        return {
            navList: [
                {
                    to: "my_account",
                    title: "My Account",
                    icon: "mdi-account-circle-outline",
                    component: import('./Dialogs/MyAccount.vue'),
                },
                {
                    to: "notifications",
                    title: "Notifications And Sounds",
                    icon: "mdi-bell-outline",
                    component: null,
                },
                {
                    to: "appearance",
                    title: "Appearance",
                    icon: "mdi-theme-light-dark",
                    component: null,
                },
                {
                    to: "call",
                    title: "Call Settings",
                    icon: "mdi-phone-outline",
                    component: null,
                },
                {
                    to: "language",
                    title: "Language",
                    icon: "mdi-translate-variant",
                    component: null,
                },
            ],
            currentWindow: "my_account",
            uiState,
        }
    },
    methods: {
        handleChangeWindow(windowName) {
            this.$data.currentWindow = windowName;
        }
    }
}
</script>

<template>
    <v-dialog class="custom_dialog" v-model="uiState.isSettingsDialogActive" max-width="560"
        transition="dialog-bottom-transition">

        <v-window v-model="currentWindow">
            <v-window-item value="default">
                <DefaultDialog :navList="navList" :handleChangeWindow="this.handleChangeWindow" />
            </v-window-item>
            <v-window-item value="my_account">
                <MyAccount :navList="navList" :handleChangeWindow="this.handleChangeWindow"/>
            </v-window-item>
        </v-window>
    </v-dialog>
</template>