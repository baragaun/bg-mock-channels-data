import { faker } from '@faker-js/faker';
import { ChannelMessage } from './types/ChannelMessage.js';
import { ChannelEventType, ChannelEventPayload } from './types/index.js';

class Store {
  private messages: Map<string, ChannelMessage> = new Map();
  private listeners: Set<(payload: ChannelEventPayload) => void> = new Set();

  addMessage(message: ChannelMessage): void {
    this.messages.set(message.id, message);
    this.notifyListeners({
      eventType: ChannelEventType.messageCreated,
      channelMessage: message,
      channelMessageId: message.id,
      senderId: message.createdBy || undefined
    });
  }

  getMessage(id: string): ChannelMessage | undefined {
    return this.messages.get(id);
  }

  updateMessage(message: ChannelMessage): void {
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

  deleteMessage(id: string): void {
    if (this.messages.delete(id)) {
      this.notifyListeners({
        eventType: ChannelEventType.messageDeleted,
        channelMessageId: id
      });
    }
  }

  getMessages(skip: number, limit: number): ChannelMessage[] {
    return Array.from(this.messages.values())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(skip, skip + limit);
  }

  addListener(callback: (payload: ChannelEventPayload) => void): void {
    this.listeners.add(callback);
  }

  private notifyListeners(payload: ChannelEventPayload): void {
    this.listeners.forEach(listener => listener(payload));
  }
}

export const store = new Store();