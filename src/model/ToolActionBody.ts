/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */

/**
 * The ToolActionBody model module.
 * @module model/ToolActionBody
 * @version 0.1.4
 */
export default class ToolActionBody {
    /**
     * Constructs a new <code>ToolActionBody</code>.
     * @alias module:model/ToolActionBody
     */
    constructor() {}

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    _initialize() {}

    /**
     * Constructs a <code>ToolActionBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ToolActionBody} obj Optional instance to populate.
     * @return {module:model/ToolActionBody} The populated <code>ToolActionBody</code> instance.
     */
    static constructFromObject(data: any, obj?: ToolActionBody): ToolActionBody {
        if (data) {
            obj = obj || new ToolActionBody();
            obj._initialize();
        }
        return obj!;
    }
}