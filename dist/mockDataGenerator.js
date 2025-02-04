import { faker } from '@faker-js/faker';
import { Channel } from './types/Channel.js';
import { ChannelMessage } from './types/ChannelMessage.js';
import { ChannelType, ChannelMessageType } from './types/enums.js';
import { ChannelParticipant } from './types/ChannelParticipant.js';
export class MockDataGenerator {
    constructor() {
        // Generate two fixed participant IDs
        this.participantIds = [faker.string.uuid(), faker.string.uuid()];
    }
    generateChannel() {
        const channel = new Channel({
            id: faker.string.uuid(),
            name: faker.company.name(),
            topic: faker.lorem.sentence(),
            description: faker.lorem.paragraph(),
            channelType: ChannelType.test,
            createdAt: faker.date.past(),
            createdBy: this.participantIds[0],
            userIds: this.participantIds,
            participants: this.generateParticipants()
        });
        return channel;
    }
    generateParticipants() {
        return this.participantIds.map(id => new ChannelParticipant({
            id: faker.string.uuid(),
            userId: id
        }));
    }
    generateMessage(channelId, replyToMessageId) {
        const senderId = faker.helpers.arrayElement(this.participantIds);
        return new ChannelMessage({
            id: faker.string.uuid(),
            channelId,
            messageText: faker.lorem.paragraph(),
            channelMessageType: ChannelMessageType.test,
            replyToMessageId: replyToMessageId,
            createdAt: faker.date.recent(),
            createdBy: senderId,
            metadata: {
                senderUserHandle: faker.internet.userName(),
                senderFirstName: faker.person.firstName(),
                senderLastName: faker.person.lastName(),
                senderAvatarUrl: faker.image.avatar()
            }
        });
    }
    generateMessages(channelId, count = 10) {
        const messages = [];
        for (let i = 0; i < count; i++) {
            // 20% chance to be a reply to a previous message
            const replyTo = i > 0 && Math.random() < 0.2 ? messages[Math.floor(Math.random() * i)].id : undefined;
            messages.push(this.generateMessage(channelId, replyTo));
        }
        return messages.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
    }
    getParticipantIds() {
        return [...this.participantIds];
    }
}
export const mockDataGenerator = new MockDataGenerator();
