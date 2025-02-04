import { ChannelEventType } from './types/index.js';
class Store {
    constructor() {
        this.messages = new Map();
        this.listeners = new Set();
    }
    addMessage(message) {
        this.messages.set(message.id, message);
        this.notifyListeners({
            eventType: ChannelEventType.messageCreated,
            channelMessage: message,
            channelMessageId: message.id,
            senderId: message.createdBy || undefined
        });
    }
    getMessage(id) {
        return this.messages.get(id);
    }
    updateMessage(message) {
        if (this.messages.has(message.id)) {
            this.messages.set(message.id, message);
            this.notifyListeners({
                eventType: ChannelEventType.messageUpdated,
                channelMessage: message,
                channelMessageId: message.id,
                senderId: message.updatedBy || undefined
            });
        }
    }
    deleteMessage(id) {
        if (this.messages.delete(id)) {
            this.notifyListeners({
                eventType: ChannelEventType.messageDeleted,
                channelMessageId: id
            });
        }
    }
    getMessages(skip, limit) {
        return Array.from(this.messages.values())
            .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
            .slice(skip, skip + limit);
    }
    addListener(callback) {
        this.listeners.add(callback);
    }
    notifyListeners(payload) {
        this.listeners.forEach(listener => listener(payload));
    }
}
export const store = new Store();
