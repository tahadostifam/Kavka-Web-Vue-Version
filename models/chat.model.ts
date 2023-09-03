import { IMessage } from "./message.model";

export interface IChat {
    chatID: string;
    messages: IMessage[];
}
