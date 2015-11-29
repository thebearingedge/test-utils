'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jsdom = exports.stub = exports.spy = exports.sinon = exports.request = exports.expect = exports.chai = undefined;

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _sinonChai = require('sinon-chai');

var _sinonChai2 = _interopRequireDefault(_sinonChai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _jsdom = require('jsdom');

var _jsdom2 = _interopRequireDefault(_jsdom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_sinonChai2.default);
_chai2.default.use(_chaiAsPromised2.default);
_chai2.default.use(_chaiHttp2.default);

require('sinon-as-promised');

var expect = _chai2.default.expect;
var request = _chai2.default.request;
var spy = _sinon2.default.spy;
var stub = _sinon2.default.stub;
exports.chai = _chai2.default;
exports.expect = expect;
exports.request = request;
exports.sinon = _sinon2.default;
exports.spy = spy;
exports.stub = stub;
exports.jsdom = _jsdom2.default;
