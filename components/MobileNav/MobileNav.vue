<script lang="ts">
import uiState from '~/stores/ui_state';
import "./MobileNav.scss"

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
    <div class="mobile_nav d-flex flex-row justify-space-between align-center py-8">
        <div v-for="(item, index) in uiState.tabs" :key="index" @click="setActiveTab(item.to)"
            class="mini_sidebar-item d-flex flex-column justify-center align-center"
            :class="uiState.activeTab == item.to ? 'active' : undefined">
            <v-icon :icon="item.icon"></v-icon>
            <span>{{ item.text }}</span>
        </div>
    </div>
</template>