import { ChannelMessage } from './types/ChannelMessage.js';
import { ChannelEventPayload } from './types/index.js';
declare class Store {
    private messages;
    private listeners;
    addMessage(message: ChannelMessage): void;
    getMessage(id: string): ChannelMessage | undefined;
    updateMessage(message: ChannelMessage): void;
    deleteMessage(id: string): void;
    getMessages(skip: number, limit: number): ChannelMessage[];
    addListener(callback: (payload: ChannelEventPayload) => void): void;
    private notifyListeners;
}
export declare const store: Store;
export {};
