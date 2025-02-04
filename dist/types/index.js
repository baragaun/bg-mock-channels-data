/**
 * Enum representing the type of channel event.
 */
export var ChannelEventType;
(function (ChannelEventType) {
    /**
     * A channel message was created.
     */
    ChannelEventType["messageCreated"] = "messageCreated";
    /**
     * A channel message was deleted.
     */
    ChannelEventType["messageDeleted"] = "messageDeleted";
    /**
     * A channel message was updated.
     * For example, the creator of the message could have changed the message text.
     */
    ChannelEventType["messageUpdated"] = "messageUpdated";
    /**
     * A channel message was delivered to the recipient.
     * The channel message was saved into the database.
     */
    ChannelEventType["messageDelivered"] = "messageDelivered";
    /**
     * A channel message was seen by the recipient or a participant in a group channel.
     */
    ChannelEventType["messageSeen"] = "messageSeen";
    /**
     * A user started typing.
     * We will add support for this at a later time.
     */
    ChannelEventType["userStartedTyping"] = "userStartedTyping";
    /**
     * A user stopped typing.
     * We will add support for this at a later time.
     */
    ChannelEventType["userStoppedTyping"] = "userStoppedTyping";
    /**
     * A reaction (emoji) was added to a channel message.
     * We will add support for this at a later time.
     */
    ChannelEventType["reactionToMessageCreated"] = "reactionToMessageCreated";
    /**
     * A reaction (emoji) was removed from a channel message.
     * We will add support for this at a later time.
     */
    ChannelEventType["reactionToMessageDeleted"] = "reactionToMessageDeleted";
})(ChannelEventType || (ChannelEventType = {}));
