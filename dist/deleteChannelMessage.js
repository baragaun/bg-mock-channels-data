import { store } from './store.js';
const deleteChannelMessage = async (id) => {
    store.deleteMessage(id);
};
export default deleteChannelMessage;
