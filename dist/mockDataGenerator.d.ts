import { Channel } from './types/Channel.js';
import { ChannelMessage } from './types/ChannelMessage.js';
export declare class MockDataGenerator {
    private participantIds;
    constructor();
    generateChannel(): Channel;
    private generateParticipants;
    generateMessage(channelId: string, replyToMessageId?: string): ChannelMessage;
    generateMessages(channelId: string, count?: number): ChannelMessage[];
    getParticipantIds(): string[];
}
export declare const mockDataGenerator: MockDataGenerator;
