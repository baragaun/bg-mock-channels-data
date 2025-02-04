/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
import { ModelEventType } from './enums.js';
export class ModelEvent {
    constructor(attributes) {
        this.time = new Date();
        this.modelEventType = ModelEventType.info;
        this.message = '';
        if (attributes) {
            if (attributes.time) {
                if (attributes.time instanceof Date) {
                    this.time = attributes.time;
                }
                else {
                    this.time = new Date(attributes.time);
                }
            }
            if (attributes.modelEventType) {
                this.modelEventType = attributes.modelEventType;
            }
            if (attributes.message) {
                this.message = attributes.message;
            }
        }
    }
}
