import { faker } from '@faker-js/faker';
import { store } from './store.js';
const createChannelMessage = async (channelMessage) => {
    // Ensure required fields are set
    if (!channelMessage.id) {
        channelMessage.id = faker.string.uuid();
    }
    if (!channelMessage.createdAt) {
        channelMessage.createdAt = new Date();
    }
    store.addMessage(channelMessage);
    return channelMessage;
};
export default createChannelMessage;
