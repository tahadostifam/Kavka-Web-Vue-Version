import { IMessage } from "./message.model";

export interface IChat {
    chatID: string,
    chatTitle: string,
    chatCaption: string,
    channelType: string,
    messages: any[];
}
