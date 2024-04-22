import { IMessage } from "../messages/message.model";

export interface IChat {
  chatId: string;
  chatType: string;
  chatDetail: {
    title: string
    username: string
  }
  messages: IMessage[]
}
