/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import { PixelContext } from './PixelContext';
import { PixelProperties } from './PixelProperties';

class PixelTrackBody {
    event: string;
    pixel_code: string;
    context?: PixelContext;
    event_id?: string;
    properties?: PixelProperties;
    timestamp?: string;

    constructor(event: string, pixel_code: string) {
        this.event = event;
        this.pixel_code = pixel_code;
    }

    static constructFromObject(data: any, obj?: PixelTrackBody): PixelTrackBody {
        if (!data) {
            return new PixelTrackBody('', '');
        }

        obj = obj || new PixelTrackBody(data.event || '', data.pixel_code || '');

        if (data.hasOwnProperty('context'))
            obj.context = PixelContext.constructFromObject(data.context, new PixelContext());
        
        if (data.hasOwnProperty('event_id'))
            obj.event_id = data.event_id;
        
        if (data.hasOwnProperty('properties'))
            obj.properties = PixelProperties.constructFromObject(data.properties, new PixelProperties());
        
        if (data.hasOwnProperty('timestamp'))
            obj.timestamp = data.timestamp;

        return obj;
    }
}

export default PixelTrackBody;

