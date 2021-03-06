'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.skipSlow = exports.begin = exports.rejected = exports.stub = exports.spy = exports.expect = exports.$$ = exports.$ = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _sinonChai = require('sinon-chai');

var _sinonChai2 = _interopRequireDefault(_sinonChai);

var _chaiStruct = require('chai-struct');

var _chaiStruct2 = _interopRequireDefault(_chaiStruct);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

require('sinon-as-promised');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_sinonChai2.default);
_chai2.default.use(_chaiStruct2.default);
_chai2.default.use(_chaiAsPromised2.default);

var $ = exports.$ = function $(node, selector) {
  return node.querySelector(selector);
};
var $$ = exports.$$ = function $$(node, selector) {
  return Array.from(node.querySelectorAll(selector));
};

var expect = _chai2.default.expect;
exports.expect = expect;
var spy = _sinon2.default.spy;
var stub = _sinon2.default.stub;

/**
 * rejected: pass a promise and catch its rejected reason
 */

exports.spy = spy;
exports.stub = stub;
var rejected = exports.rejected = function rejected(promise) {
  return promise.catch(function (err) {
    return err;
  });
};

/**
 * begin: for mocha tests, passed as the callback to a hook
 * accepts a callback and passes the knex transaction object, calling done
 */

var begin = exports.begin = function begin(knex, ready) {
  return function (done) {
    rejected(knex.transaction(function (trx) {
      ready(trx);
      done();
    }));
  };
};

var skipSlow = exports.skipSlow = function skipSlow(_) {

  var ctx = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' ? window : global;

  function throwError() {
    throw new Error('skipSlow only works in mocha');
  }

  var it = ctx.it;


  if (!it) return throwError;

  return process.env.SLOW_TESTS ? it : it.skip;
};
