import createChannelMessage from './createChannelMessage.js';
import deleteChannelMessage from './deleteChannelMessage.js';
import findChannelMessages from './findChannelMessages.js';
import updateChannelMessage from './updateChannelMessage.js';
const listeners = [];
const bgMockChannelsData = {
    addEventListener(listener) {
        listeners.push(listener);
    },
    createChannelMessage,
    deleteChannelMessage,
    findChannelMessages,
    updateChannelMessage,
};
export default bgMockChannelsData;
