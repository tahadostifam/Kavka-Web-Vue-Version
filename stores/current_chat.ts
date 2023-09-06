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
        _currentChat: undefined as CurrentChat | undefined
    }),
    actions: {
        setCurrentChat(currentChat: CurrentChat) {
            this._currentChat = currentChat;
        },
        removeCurrentChat() {
            this._currentChat = undefined;
        }
    },
    getters: {
        isSelected(): boolean {
            return this._currentChat != undefined;
        },
        currentChat(): CurrentChat | undefined {
            return this._currentChat;
        }
    }
});
