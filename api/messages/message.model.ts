export interface IMessage {
    messageId: string
    senderId: string
    edited: boolean
    seen: boolean
    type: string
    content: any
}
