import { ChannelMessage } from './ChannelMessage.js';
/**
 * Enum representing the type of channel event.
 */
export declare enum ChannelEventType {
    /**
     * A channel message was created.
     */
    messageCreated = "messageCreated",
    /**
     * A channel message was deleted.
     */
    messageDeleted = "messageDeleted",
    /**
     * A channel message was updated.
     * For example, the creator of the message could have changed the message text.
     */
    messageUpdated = "messageUpdated",
    /**
     * A channel message was delivered to the recipient.
     * The channel message was saved into the database.
     */
    messageDelivered = "messageDelivered",
    /**
     * A channel message was seen by the recipient or a participant in a group channel.
     */
    messageSeen = "messageSeen",
    /**
     * A user started typing.
     * We will add support for this at a later time.
     */
    userStartedTyping = "userStartedTyping",
    /**
     * A user stopped typing.
     * We will add support for this at a later time.
     */
    userStoppedTyping = "userStoppedTyping",
    /**
     * A reaction (emoji) was added to a channel message.
     * We will add support for this at a later time.
     */
    reactionToMessageCreated = "reactionToMessageCreated",
    /**
     * A reaction (emoji) was removed from a channel message.
     * We will add support for this at a later time.
     */
    reactionToMessageDeleted = "reactionToMessageDeleted"
}
/**
 * Interface representing the payload of a channel event.
 */
export interface ChannelEventPayload {
    /**
     * The type of the event.
     */
    eventType: ChannelEventType;
    /**
     * The channel message associated with the event.
     * Will be `null` for `messageDeleted`, `messageDelivered`, `messageSeen`, `userStartedTyping`, `userStoppedTyping`, `reactionToMessageCreated`, `reactionToMessageDeleted`.
     */
    channelMessage?: ChannelMessage;
    /**
     * The ID of the channel message.
     */
    channelMessageId?: string;
    /**
     * The ID of the user that sent the message.
     */
    senderId?: string;
    /**
     * The ID of the user that received/seen/deleted the message, or added a reaction (emoji) to a message.
     */
    userId?: string;
}
/**
 * Type representing a callback function for channel events.
 * @param payload - The payload of the channel event.
 */
export type ChannelEventCallback = (payload: ChannelEventPayload) => void;
/**
 * Interface representing a listener for channel events.
 */
export interface ChannelEventListener {
    /**
     * The ID of the channel.
     * We can ignore this for now.
     */
    channelId: string;
    /**
     * The ID of the user.
     */
    userId: string;
    /**
     * The UUID of the user's device.
     */
    deviceUuid: string;
    /**
     * The callback function to be invoked when a channel event occurs.
     */
    callback: ChannelEventCallback;
}
export interface BgMockChannelsData {
    /**
     * Creates a new channel.
     * @returns A promise that resolves to the created channel.
     */
    createChannelMessage: (channelMessage: ChannelMessage) => Promise<ChannelMessage>;
    /**
     * Updates an existing channel.
     * @returns A promise that resolves to the updated channel.
     */
    updateChannelMessage: (channelMessage: ChannelMessage) => Promise<ChannelMessage>;
    /**
     * Deletes an existing channel.
     * @returns A promise that resolves to the deleted channel.
     */
    deleteChannelMessage: (id: string) => Promise<void>;
    /**
     * Load a paginated list of messages for a channel.
     * @param channelId - The ID of the channel (we can ignore this for now).
     * @param skip - number of messages to skip for pagination.
     * @param limit - number of messages to return for pagination.
     * @returns A promise that resolves to a list of channel messages.
     */
    findChannelMessages: (channelId: string, skip: number, limit: number) => Promise<ChannelMessage[]>;
    /**
     * Subscribe to channel events.
     * @param listener - The listener to be added to the mock data provider.
     */
    addEventListener: (listener: ChannelEventListener) => void;
}
