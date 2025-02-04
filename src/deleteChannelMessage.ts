import { store } from './store.js';

const deleteChannelMessage = async (
  id: string,
): Promise<void> => {
  store.deleteMessage(id);
};

export default deleteChannelMessage;
