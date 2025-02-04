# bg-mock-channels-data

Mock channels data provider for testing channel UI components. This package provides mock data generation and simulated backend operations for channels and messages.

## Installation

Using npm:
```bash
npm install @baragaun/bg-mock-channels-data
```

Using yarn:
```bash
yarn add @baragaun/bg-mock-channels-data
```

## Usage

### Basic Setup

```typescript
import {
  bgMockChannelsData,
  mockDataGenerator,
  populateStore
} from '@baragaun/bg-mock-channels-data';

// Populate store with a channel and 10 messages
const { channel, participantIds } = populateStore(10);
```

### Working with Messages

```typescript
// Find messages with pagination
const messages = await bgMockChannelsData.findChannelMessages(
  channel.id,  // channelId
  0,          // skip
  10          // limit
);

// Create a new message
const newMessage = await bgMockChannelsData.createChannelMessage({
  channelId: channel.id,
  messageText: "Hello world!",
  channelMessageType: ChannelMessageType.test,
  createdBy: participantIds[0]
});

// Update a message
const updatedMessage = await bgMockChannelsData.updateChannelMessage({
  id: newMessage.id,
  messageText: "Updated message"
});

// Delete a message
await bgMockChannelsData.deleteChannelMessage(newMessage.id);
```

### Real-time Events

```typescript
// Listen to channel events
bgMockChannelsData.addEventListener({
  userId: "user-id",
  deviceUuid: "device-uuid",
  callback: (event) => {
    console.log('Event received:', event);
  }
});
```

### Custom Mock Data Generation

```typescript
// Generate a mock channel
const channel = mockDataGenerator.generateChannel();

// Generate a single message
const message = mockDataGenerator.generateMessage(channel.id);

// Generate multiple messages
const messages = mockDataGenerator.generateMessages(channel.id, 5); // 5 messages
```

## Testing Example

```typescript
import { populateStore, bgMockChannelsData } from '@baragaun/bg-mock-channels-data';

describe('Channel Component', () => {
  beforeEach(() => {
    // Setup fresh mock data before each test
    const { channel } = populateStore(5);
  });

  it('should load messages', async () => {
    const messages = await bgMockChannelsData.findChannelMessages(
      channel.id,
      0,
      10
    );

    expect(messages.length).toBe(5);
  });

  it('should create a message', async () => {
    const newMessage = await bgMockChannelsData.createChannelMessage({
      channelId: channel.id,
      messageText: "Test message"
    });

    expect(newMessage.messageText).toBe("Test message");
  });
});
```

## API Reference

### populateStore(messageCount: number)
Initializes the mock store with a channel and specified number of messages.
- Returns: `{ channel: Channel, participantIds: string[] }`

### bgMockChannelsData
Object containing CRUD operations for messages:
- `createChannelMessage(message: ChannelMessage): Promise<ChannelMessage>`
- `findChannelMessages(channelId: string, skip: number, limit: number): Promise<ChannelMessage[]>`
- `updateChannelMessage(message: ChannelMessage): Promise<ChannelMessage>`
- `deleteChannelMessage(messageId: string): Promise<void>`
- `addEventListener(listener: ChannelEventListener): void`

### mockDataGenerator
Utility for generating mock data:
- `generateChannel(): Channel`
- `generateMessage(channelId: string, replyToMessageId?: string): ChannelMessage`
- `generateMessages(channelId: string, count: number): ChannelMessage[]`

## License

MIT

---
Copyright (c) 2025 Baragaun, Inc. - All rights reserved
