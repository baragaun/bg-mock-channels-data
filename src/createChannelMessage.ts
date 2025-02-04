import { faker } from '@faker-js/faker';
import { ChannelMessage } from './types/ChannelMessage.js';
import { store } from './store.js';

const createChannelMessage = async (
  channelMessage: ChannelMessage,
): Promise<ChannelMessage> => {
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
