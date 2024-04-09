<script>
import "../SettingsDialog.scss"

export default {
    props: ["navList", "handleChangeWindow"]
}
</script>
<template>
    <v-card>
        <v-card-title class="d-flex justify-space-between align-center pa-3 ">
            <div class="d-flex flex-row align-center">
                <v-btn @click="handleChangeWindow('default')" icon="mdi-arrow-left" variant="text"></v-btn>

                <h2 class="dialog-title text-h5 ps-3">Info</h2>
            </div>

            <v-btn @click="uiState.isSettingsDialogActive = false" icon="mdi-close" variant="text"></v-btn>
        </v-card-title>

        <div style="overflow: auto;">

            <div class="settings_dialog_my_account_user_avatar text-center py-4">
                <v-avatar class="mr-3" size="170">
                    <v-img src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
                    <v-btn icon="mdi-camera" class="change_avatar_button" color="primary" />
                </v-avatar>

                <h3 class="mt-4">[ Taha. Dostifam ]</h3>
                <span class="text-grey">@dra50n</span>
            </div>

            <v-card-text class="px-5">
                <v-text-field maxlength="30" color="primary" label="Name" variant="outlined"></v-text-field>

                <v-text-field maxlength="30" color="primary" label="Last Name" variant="outlined"></v-text-field>

                <v-text-field maxlength="30" color="primary" label="Phone" variant="outlined"></v-text-field>

                <v-text-field maxlength="30" color="primary" label="Username" variant="outlined"></v-text-field>

                <v-text-field maxlength="100" color="primary" label="Biography" variant="outlined"></v-text-field>

                <v-btn size="large" color="primary" block>Save</v-btn>
            </v-card-text>
        </div>
    </v-card>
</template>