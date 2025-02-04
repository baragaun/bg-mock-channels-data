import { store } from './store.js';
import { mockDataGenerator } from './mockDataGenerator.js';
import { Channel } from './types/Channel.js';

export const populateStore = (messageCount: number = 10): {
  channel: Channel;
  participantIds: string[];
} => {
  const channel = mockDataGenerator.generateChannel();
  const messages = mockDataGenerator.generateMessages(channel.id, messageCount);
  
  // Add all messages to the store
  messages.forEach(message => store.addMessage(message));

  return {
    channel,
    participantIds: mockDataGenerator.getParticipantIds()
  };
};