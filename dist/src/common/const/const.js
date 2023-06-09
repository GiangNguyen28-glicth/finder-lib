"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoID = exports.Service = exports.Client = exports.Language = void 0;
const mongoose = require("mongoose");
var Language;
(function (Language) {
    Language["VN"] = "vi";
    Language["EN"] = "en";
})(Language = exports.Language || (exports.Language = {}));
var Client;
(function (Client) {
    Client["RMQ"] = "RMQ";
    Client["REDIS"] = "REDIS";
    Client["TYPE_ORM"] = "TYPE_ORM";
})(Client = exports.Client || (exports.Client = {}));
var Service;
(function (Service) {
    Service["USER"] = "USER";
    Service["AUTH"] = "AUTH";
    Service["SAGA"] = "SAGA";
    Service["PRODUCT"] = "PRODUCT";
    Service["ORDER"] = "ORDER";
    Service["PAYMENT"] = "PAYMENT";
    Service["CART"] = "CART";
})(Service = exports.Service || (exports.Service = {}));
exports.MongoID = mongoose.Schema.Types.ObjectId;
//# sourceMappingURL=const.js.map