/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
export class BgLatestUnseenChannelMessageInfo {
    constructor(attributes) {
        this.userId = '';
        this.createdAt = new Date();
        if (attributes) {
            if (attributes.userId) {
                this.userId = attributes.userId;
            }
            if (attributes.createdAt) {
                if (attributes.createdAt instanceof Date) {
                    this.createdAt = attributes.createdAt;
                }
                else {
                    this.createdAt = new Date(attributes.createdAt);
                }
            }
        }
    }
}
