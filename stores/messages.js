import { defineStore } from 'pinia';

export const useMessagesStore = defineStore('messages', {
    state: () => ({
        _messages: []
    }),
    actions: {
        insertMessage(darkMode) {
            this.darkMode = darkMode;
        },
    },
    getters: {
        isEmptyChat() {
            return this._messages.length() == 0;
        }
    }
});
