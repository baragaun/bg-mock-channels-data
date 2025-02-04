/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
export class BgChannelsUserMetadata {
    constructor(attributes) {
        this.channelCount = 0;
        this.messagesSentCount = 0;
        this.unseenMessageCount = 0;
        this.unrespondedMessageCount = 0;
        this.invitationsSentCount = 0;
        this.invitationsReceivedCount = 0;
        this.rejectedInvitationCount = 0;
        this.acceptedInvitationCount = 0;
        this.pendingInvitationCount = 0;
        if (attributes) {
            if (attributes.channelCount === 0 ||
                (attributes.channelCount &&
                    !isNaN(attributes.channelCount))) {
                this.channelCount = attributes.channelCount;
            }
            if (attributes.messagesSentCount === 0 ||
                (attributes.messagesSentCount &&
                    !isNaN(attributes.messagesSentCount))) {
                this.messagesSentCount = attributes.messagesSentCount;
            }
            if (attributes.unseenMessageCount === 0 ||
                (attributes.unseenMessageCount &&
                    !isNaN(attributes.unseenMessageCount))) {
                this.unseenMessageCount = attributes.unseenMessageCount;
            }
            if (attributes.unrespondedMessageCount === 0 ||
                (attributes.unrespondedMessageCount &&
                    !isNaN(attributes.unrespondedMessageCount))) {
                this.unrespondedMessageCount = attributes.unrespondedMessageCount;
            }
            if (attributes.invitationsSentCount === 0 ||
                (attributes.invitationsSentCount &&
                    !isNaN(attributes.invitationsSentCount))) {
                this.invitationsSentCount = attributes.invitationsSentCount;
            }
            if (attributes.invitationsReceivedCount === 0 ||
                (attributes.invitationsReceivedCount &&
                    !isNaN(attributes.invitationsReceivedCount))) {
                this.invitationsReceivedCount = attributes.invitationsReceivedCount;
            }
            if (attributes.rejectedInvitationCount === 0 ||
                (attributes.rejectedInvitationCount &&
                    !isNaN(attributes.rejectedInvitationCount))) {
                this.rejectedInvitationCount = attributes.rejectedInvitationCount;
            }
            if (attributes.acceptedInvitationCount === 0 ||
                (attributes.acceptedInvitationCount &&
                    !isNaN(attributes.acceptedInvitationCount))) {
                this.acceptedInvitationCount = attributes.acceptedInvitationCount;
            }
            if (attributes.pendingInvitationCount === 0 ||
                (attributes.pendingInvitationCount &&
                    !isNaN(attributes.pendingInvitationCount))) {
                this.pendingInvitationCount = attributes.pendingInvitationCount;
            }
            if (attributes.updatedAt) {
                if (attributes.updatedAt instanceof Date) {
                    this.updatedAt = attributes.updatedAt;
                }
                else {
                    this.updatedAt = new Date(attributes.updatedAt);
                }
            }
        }
    }
}
