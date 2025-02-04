import { store } from './store.js';
const updateChannelMessage = async (channelMessage) => {
    channelMessage.updatedAt = new Date();
    store.updateMessage(channelMessage);
    return channelMessage;
};
export default updateChannelMessage;
