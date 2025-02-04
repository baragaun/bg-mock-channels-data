import { ChannelMessage } from './types/ChannelMessage.js';
import { store } from './store.js';

const updateChannelMessage = async (
  channelMessage: ChannelMessage,
): Promise<ChannelMessage> => {
  channelMessage.updatedAt = new Date();
  store.updateMessage(channelMessage);
  return channelMessage;
};

export default updateChannelMessage;
