'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tracery = exports.request = exports.skipSlow = exports.begin = exports.rejected = exports.stub = exports.spy = exports.expect = exports.$$ = exports.$ = undefined;

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _sinonChai = require('sinon-chai');

var _sinonChai2 = _interopRequireDefault(_sinonChai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _chaiInterface = require('chai-interface');

var _chaiInterface2 = _interopRequireDefault(_chaiInterface);

var _supertestAsPromised = require('supertest-as-promised');

var _supertestAsPromised2 = _interopRequireDefault(_supertestAsPromised);

var _tracery = require('tracery');

var _tracery2 = _interopRequireDefault(_tracery);

require('sinon-as-promised');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_sinonChai2.default);
_chai2.default.use(_chaiAsPromised2.default);
_chai2.default.use(_chaiInterface2.default);

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

  function throwError() {
    throw new Error('skipSlow only works in mocha');
  }

  var _global = global;
  var it = _global.it;


  if (!it) return throwError;

  return process.env.SLOW_TESTS ? it : it.skip;
};

var request = exports.request = _supertestAsPromised2.default;

var tracery = exports.tracery = _tracery2.default;
