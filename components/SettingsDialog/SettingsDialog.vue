<script>
import "./SettingsDialog.scss"
import uiState from "@/stores/ui_state"

// Import dialogs
import DefaultDialog from "./Dialogs/DefaultDialog.vue"

export default {
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
            uiState,
            dialogMainView: DefaultDialog
        }
    },
    methods: {
        loadDialog(item) {
            
        }
    }
}
</script>

<template>
    <v-dialog class="custom_dialog" v-model="uiState.isSettingsDialogActive" max-width="560"
        transition="dialog-bottom-transition">
       
        <div>
            {{ dialogMainView }}
        </div>

    </v-dialog>
</template>