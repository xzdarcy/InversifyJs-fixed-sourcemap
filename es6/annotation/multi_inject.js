"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiInject = void 0;
const METADATA_KEY = require("../constants/metadata_keys");
const metadata_1 = require("../planning/metadata");
const decorator_utils_1 = require("./decorator_utils");
function multiInject(serviceIdentifier) {
    return function (target, targetKey, index) {
        const metadata = new metadata_1.Metadata(METADATA_KEY.MULTI_INJECT_TAG, serviceIdentifier);
        if (typeof index === "number") {
            decorator_utils_1.tagParameter(target, targetKey, index, metadata);
        }
        else {
            decorator_utils_1.tagProperty(target, targetKey, metadata);
        }
    };
}
exports.multiInject = multiInject;
//# sourceMappingURL=multi_inject.js.map