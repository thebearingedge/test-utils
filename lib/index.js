'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rootRequire = exports.jsdom = exports.stub = exports.spy = exports.sinon = exports.expect = exports.chai = undefined;

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _sinonChai = require('sinon-chai');

var _sinonChai2 = _interopRequireDefault(_sinonChai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _jsdom = require('jsdom');

var _jsdom2 = _interopRequireDefault(_jsdom);

var _rootRequire = require('root-require');

var _rootRequire2 = _interopRequireDefault(_rootRequire);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_sinonChai2.default);
_chai2.default.use(_chaiAsPromised2.default);

var expect = _chai2.default.expect;
var spy = _sinon2.default.spy;
var stub = _sinon2.default.stub;
exports.chai = _chai2.default;
exports.expect = expect;
exports.sinon = _sinon2.default;
exports.spy = spy;
exports.stub = stub;
exports.jsdom = _jsdom2.default;
exports.rootRequire = _rootRequire2.default;
