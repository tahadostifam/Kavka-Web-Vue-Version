<script>
import "./SettingsDialog.scss"
import uiState from "@/stores/ui_state"

export default {
    data() {
        return {
            uiState,
        }
    },
    
}
</script>

<template>
    <v-dialog v-model="uiState.isSettingsDialogActive" max-width="500" transition="dialog-bottom-transition">
        <v-card title="Dialog">
            <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua.
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn @click="uiState.isSettingsDialogActive = false" text="Close Dialog"></v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>