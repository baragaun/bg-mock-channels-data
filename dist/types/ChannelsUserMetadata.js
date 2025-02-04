/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
import { BgChannelsUserMetadata } from './BgChannelsUserMetadata.js';
export class ChannelsUserMetadata extends BgChannelsUserMetadata {
    constructor(attributes) {
        super(attributes);
        this.mentoringSessionCount = 0;
        if (attributes) {
            if (attributes.mentoringSessionCount === 0 ||
                (attributes.mentoringSessionCount &&
                    !isNaN(attributes.mentoringSessionCount))) {
                this.mentoringSessionCount = attributes.mentoringSessionCount;
            }
        }
    }
}
