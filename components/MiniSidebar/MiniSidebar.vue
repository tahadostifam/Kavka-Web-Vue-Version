<script lang="ts">
import uiState from "~/stores/ui_state";
import "./MiniSidebar.scss"

export default {
    data() {
        return {
            uiState,
        }
    },
    methods: {
        setActiveTab(tab: string) {
            this.$data.uiState.activeTab = tab
        }
    }
}
</script>

<template>
    <div class="mini_sidebar d-flex flex-column justify-space-between align-center py-8">
        <div class="d-flex flex-column ga-8 align-center">
            <img class="mini_sidebar-logo mb-6" src="@/assets/img/logo.png" />
            <div v-for="(item, index) in uiState.tabs" :key="index" @click="setActiveTab(item.to)"
                class="mini_sidebar-item d-flex flex-column justify-center align-center"
                :class="uiState.activeTab == item.to ? 'active' : undefined">
                <v-icon :icon="item.icon"></v-icon>
                <span>{{ item.text }}</span>
            </div>
        </div>
        <div>
            <UserAvatar
                src="data:image/png;base64,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"
                color="primary" badge="success">
                J
            </UserAvatar>
        </div>
    </div>
</template>