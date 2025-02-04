/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
import { BaseModel } from './BaseModel.js';
import { ChannelType } from './enums.js';
export class BgChannel extends BaseModel {
    constructor(attributes) {
        super(attributes);
        this.channelType = ChannelType.unset;
        if (attributes) {
            if (attributes.name) {
                this.name = attributes.name;
            }
            if (attributes.topic) {
                this.topic = attributes.topic;
            }
            if (attributes.description) {
                this.description = attributes.description;
            }
            if (attributes.tags) {
                this.tags = attributes.tags;
            }
            if (attributes.channelType) {
                this.channelType = attributes.channelType;
            }
            if (attributes.statuses) {
                this.statuses = attributes.statuses;
            }
            if (attributes.userIds) {
                this.userIds = attributes.userIds;
            }
            if (attributes.metadata) {
                this.metadata = attributes.metadata;
            }
            if (attributes.pausedAt) {
                if (attributes.pausedAt instanceof Date) {
                    this.pausedAt = attributes.pausedAt;
                }
                else {
                    this.pausedAt = new Date(attributes.pausedAt);
                }
            }
            if (attributes.pausedBy) {
                this.pausedBy = attributes.pausedBy;
            }
            if (attributes.suspendedAt) {
                if (attributes.suspendedAt instanceof Date) {
                    this.suspendedAt = attributes.suspendedAt;
                }
                else {
                    this.suspendedAt = new Date(attributes.suspendedAt);
                }
            }
            if (attributes.suspendedBy) {
                this.suspendedBy = attributes.suspendedBy;
            }
            if (attributes.lockedAt) {
                if (attributes.lockedAt instanceof Date) {
                    this.lockedAt = attributes.lockedAt;
                }
                else {
                    this.lockedAt = new Date(attributes.lockedAt);
                }
            }
            if (attributes.lockedBy) {
                this.lockedBy = attributes.lockedBy;
            }
            if (attributes.archivedAt) {
                if (attributes.archivedAt instanceof Date) {
                    this.archivedAt = attributes.archivedAt;
                }
                else {
                    this.archivedAt = new Date(attributes.archivedAt);
                }
            }
            if (attributes.archivedBy) {
                this.archivedBy = attributes.archivedBy;
            }
        }
    }
}
