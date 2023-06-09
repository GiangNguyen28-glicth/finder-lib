"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformTextSearch = exports.toKeyword = exports.toSlug = exports.throwIfNotExists = exports.getAuthClient = void 0;
const const_1 = require("../common/const/const");
const common_1 = require("@nestjs/common");
const slugify_1 = require("slugify");
const microservices_1 = require("@nestjs/microservices");
function getAuthClient(configService, clientType) {
    const authenticationClient = {
        port: configService.get(`PORT_CLIENT_${clientType}`),
        host: configService.get(`HOST_CLIENT_${clientType}`),
        username: configService.get(`USERNAME_CLIENT_${clientType}`),
        password: configService.get(`PASSWORD_CLIENT_${clientType}`),
    };
    return authenticationClient;
}
exports.getAuthClient = getAuthClient;
function throwIfNotExists(model, message) {
    if (!model || (model === null || model === void 0 ? void 0 : model.is_deleted)) {
        throw new microservices_1.RpcException(new common_1.NotFoundException(`${message}`));
    }
}
exports.throwIfNotExists = throwIfNotExists;
function toSlug(text, locale) {
    if (!text)
        return '';
    text = text.replace('$', '').replace('%', '');
    locale = locale ? locale : const_1.Language.EN;
    return (0, slugify_1.default)(text, {
        replacement: '-',
        lower: true,
        strict: true,
        locale: locale,
        trim: true,
    });
}
exports.toSlug = toSlug;
function toKeyword(text) {
    if (!text)
        return '';
    return text.replace(/-/g, ' ');
}
exports.toKeyword = toKeyword;
function transformTextSearch(text) {
    if (!text)
        return '';
    text = text.replace('$', '').replace('%', '');
    text = (0, slugify_1.default)(text, {
        replacement: '-',
        lower: true,
        strict: true,
        trim: true,
    });
    return text.replace(/-/g, ' ');
}
exports.transformTextSearch = transformTextSearch;
//# sourceMappingURL=utils.js.map