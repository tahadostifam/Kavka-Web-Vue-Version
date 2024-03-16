import { defineStore } from 'pinia';
import { IChat } from '~/models/chat.model';

export default defineStore({
    id: 'currentChat',
    state: () => ({
        _currentChat: undefined as IChat | undefined
    }),
    actions: {
        setCurrentChat(currentChat: IChat) {
            this._currentChat = currentChat;
        },
        clearCurrentChat() {
            this._currentChat = undefined;
        }
    },
    getters: {
        isSelected(): boolean {
            return this._currentChat != undefined;
        },
        currentChat(): IChat | undefined {
            return this._currentChat;
        }
    }
});
