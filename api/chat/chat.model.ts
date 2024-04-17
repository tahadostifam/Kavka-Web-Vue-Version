export interface IChat {
  chatId: string;
  chatType: string;
  chatDetail: {
    title: string
    username: string
  }
  lastMessage: {
    type: string,
    content: any
  }
}
