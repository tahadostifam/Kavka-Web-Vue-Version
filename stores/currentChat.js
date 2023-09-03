import { defineStore } from 'pinia';

export const useCurrentChatStore = defineStore('currentChat', {
    state: () => ({
        _currentChat: null
    }),
    actions: {
        setCurrentChat(chatID, chatTitle, messages, chatCaption, channelType) {
            this._currentChat = {
                chatID,
                chatTitle,
                messages,
                chatCaption,
                channelType
            };
        },
        removeCurrentChat() {
            this._currentChat = null;
        }
    },
    getters: {
        isSelected() {
            return this._currentChat != null;
        },
        currentChat() {
            return this._currentChat;
        }
    }
});
