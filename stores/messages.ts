import { IMessage } from "@/models/message.model";
import { defineStore } from 'pinia';

interface ChatMessage {
    chatID: string;
    messages: IMessage[];
}

export default defineStore({
    id: 'messages',
    state: () => ({
        _chats: [] as ChatMessage[]
    }),
    actions: {
        insertMessage(chatID: string, message: IMessage) {
            this._chats.forEach((item, index) => {
                if (item.chatID == chatID) {
                    item.messages = [...item.messages, message];
                    return true;
                }

                if (index == this._chats.length - 1) {
                    return false;
                }
            });
        },
        getMessages(chatID: string): IMessage[] | null {
            this._chats.forEach((item, index) => {
                if (item.chatID == chatID) {
                    return item.messages as IMessage[];
                }

                if (index == this._chats.length - 1) {
                    return null;
                }
            });

            return null;
        }
    }
});
