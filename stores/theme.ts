import { defineStore } from 'pinia';

export default defineStore({
    id: 'themes',
    state: () => ({
        _darkMode: false
    }),
    actions: {
        setDarkMode(darkMode: boolean) {
            this._darkMode = darkMode;
        },
    },
    getters: {
        getDarkMode(): boolean {
            return this._darkMode;
        }
    }
});
