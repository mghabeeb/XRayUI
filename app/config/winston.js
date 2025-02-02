"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _winston = _interopRequireWildcard(require("winston"));

require("winston-daily-rotate-file");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var LOG_DIR = process.env.LOG_DIR || 'logs';
var LOG_LEVEL = process.env.LOG_LEVEL || 'info'; // Create logs directory if it does not exist

if (!_fs["default"].existsSync(LOG_DIR)) {
  _fs["default"].mkdirSync(LOG_DIR);
}

var logger = _winston["default"].createLogger({
  transports: [new _winston["default"].transports.Console({
    format: _winston.format.combine(_winston.format.colorize(), _winston.format.simple()),
    level: LOG_LEVEL
  }), new _winston["default"].transports.DailyRotateFile({
    format: _winston.format.combine(_winston.format.timestamp(), _winston.format.json()),
    maxFiles: '14d',
    dirname: LOG_DIR,
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    filename: '%DATE%-log.log',
    level: LOG_LEVEL
  })]
});

var _default = logger;
var _default2 = _default;
exports["default"] = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LOG_DIR, "LOG_DIR", "e:\\XrayUI\\server\\config\\winston.js");
  reactHotLoader.register(LOG_LEVEL, "LOG_LEVEL", "e:\\XrayUI\\server\\config\\winston.js");
  reactHotLoader.register(logger, "logger", "e:\\XrayUI\\server\\config\\winston.js");
  reactHotLoader.register(_default, "default", "e:\\XrayUI\\server\\config\\winston.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();