import { defineStore } from 'pinia';
import { IChat } from "~/models/chat.model";


export default defineStore({
    id: 'chats',
    state: () => ({
        _chats: [] as IChat[]
    }),
    actions: {
        insertChat(chat: IChat) {
            this._chats = [...this._chats, chat];
        }
    },
    getters: {
        getChats(): IChat[] {
            return this._chats;
        }
    }
});
