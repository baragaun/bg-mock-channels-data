import { ChannelMessage } from './types/ChannelMessage.js';
declare const findChannelMessages: (channelId: string, skip: number, limit: number) => Promise<ChannelMessage[]>;
export default findChannelMessages;
