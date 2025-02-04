import { store } from './store.js';
import { mockDataGenerator } from './mockDataGenerator.js';
export const populateStore = (messageCount = 10) => {
    const channel = mockDataGenerator.generateChannel();
    const messages = mockDataGenerator.generateMessages(channel.id, messageCount);
    // Add all messages to the store
    messages.forEach(message => store.addMessage(message));
    return {
        channel,
        participantIds: mockDataGenerator.getParticipantIds()
    };
};
