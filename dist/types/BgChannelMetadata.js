/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
import { BaseModelMetadata } from './BaseModelMetadata.js';
export class BgChannelMetadata extends BaseModelMetadata {
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            if (attributes.unseenMessageInfo) {
                this.unseenMessageInfo = attributes.unseenMessageInfo;
            }
        }
    }
}
