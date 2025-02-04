import { store } from './store.js';
const findChannelMessages = async (channelId, skip, limit) => {
    return store.getMessages(skip, limit);
};
export default findChannelMessages;
