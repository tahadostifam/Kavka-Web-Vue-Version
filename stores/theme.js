import { defineStore } from 'pinia';

export const useThemesStore = defineStore('themes', {
    state: () => ({
        darkMode: false
    }),
    actions: {
        setDarkMode(darkMode) {
            this.darkMode = darkMode;
        },
    },
    getters: {
        getDarkMode() {
            return this.darkMode;
        }
    }
});
