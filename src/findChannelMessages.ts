import { ChannelMessage } from './types/ChannelMessage.js';
import { store } from './store.js';

const findChannelMessages = async (
  channelId: string,
  skip: number,
  limit: number,
): Promise<ChannelMessage[]> => {
  return store.getMessages(skip, limit);
};

export default findChannelMessages;
