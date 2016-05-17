'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chai = exports.$$ = exports.$ = exports.rejected = exports.request = exports.begin = exports.stub = exports.spy = exports.expect = undefined;

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

require('sinon-as-promised');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_sinonChai2.default);
_chai2.default.use(_chaiAsPromised2.default);
_chai2.default.use(_chaiInterface2.default);

var $ = function $(node, selector) {
  return node.querySelector(selector);
};
var $$ = function $$(node, selector) {
  return Array.from(node.querySelectorAll(selector));
};

var expect = _chai2.default.expect;
var spy = _sinon2.default.spy;
var stub = _sinon2.default.stub;

/**
 * rejected: pass a promise and catch its rejected reason
 */

var rejected = function rejected(promise) {
  return promise.catch(function (err) {
    return err;
  });
};

/**
 * begin: for mocha tests, passed as the callback to a hook
 * accepts a callback and passes the knex transaction object, calling done
 */

var begin = function begin(knex, ready) {
  return function (done) {
    rejected(knex.transaction(function (trx) {
      ready(trx);
      done();
    }));
  };
};

exports.expect = expect;
exports.spy = spy;
exports.stub = stub;
exports.begin = begin;
exports.request = _supertestAsPromised2.default;
exports.rejected = rejected;
exports.$ = $;
exports.$$ = $$;
exports.chai = _chai2.default;
