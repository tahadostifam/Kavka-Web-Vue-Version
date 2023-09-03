import { defineStore } from 'pinia';

export type CurrentChat = {
    chatID: string,
    chatTitle: string,
    chatCaption: string,
    channelType: string,
    messages: any[];
};

export default defineStore({
    id: 'currentChat',
    state: () => ({
        _currentChat: null as CurrentChat | null
    }),
    actions: {
        setCurrentChat(currentChat: CurrentChat) {
            this._currentChat = currentChat;
        },
        removeCurrentChat() {
            this._currentChat = null;
        }
    },
    getters: {
        isSelected(): boolean {
            return this._currentChat != null;
        },
        currentChat(): CurrentChat | null {
            return this._currentChat;
        }
    }
});
