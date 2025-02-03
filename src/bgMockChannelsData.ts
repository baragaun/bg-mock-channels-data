import { BgMockChannelsData, ChannelEventListener } from './types/index.js'
import createChannelMessage from './createChannelMessage.js'
import deleteChannelMessage from './deleteChannelMessage.js'
import findChannelMessages from './findChannelMessages.js'
import updateChannelMessage from './updateChannelMessage.js'

const listeners: ChannelEventListener[] = []

const bgMockChannelsData: BgMockChannelsData = {
  addEventListener(listener: ChannelEventListener): void {
    listeners.push(listener);
  },

  createChannelMessage,
  deleteChannelMessage,
  findChannelMessages,
  updateChannelMessage,
}

export default bgMockChannelsData
