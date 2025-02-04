/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
import { BgChannelMetadata } from './BgChannelMetadata.js';
export class ChannelMetadata extends BgChannelMetadata {
    constructor(attributes) {
        super(attributes);
        this.channelInvitationAccepted = false;
        this.messagesSentByCreatorCount = 0;
        this.messagesSentByFirstParticipantCount = 0;
        if (attributes) {
            if (attributes.channelInvitationAccepted === true || attributes.channelInvitationAccepted === false) {
                this.channelInvitationAccepted = attributes.channelInvitationAccepted;
            }
            if (attributes.messagesSentByCreatorCount === 0 ||
                (attributes.messagesSentByCreatorCount &&
                    !isNaN(attributes.messagesSentByCreatorCount))) {
                this.messagesSentByCreatorCount = attributes.messagesSentByCreatorCount;
            }
            if (attributes.messagesSentByFirstParticipantCount === 0 ||
                (attributes.messagesSentByFirstParticipantCount &&
                    !isNaN(attributes.messagesSentByFirstParticipantCount))) {
                this.messagesSentByFirstParticipantCount = attributes.messagesSentByFirstParticipantCount;
            }
        }
    }
}
