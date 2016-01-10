'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chaiHttp = exports.chaiDom = exports.globals = exports.$$ = exports.$ = exports.rejected = exports.begin = exports.jsdom = exports.stub = exports.spy = exports.expect = undefined;

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

var _chaiHttp2 = require('chai-http');

var _chaiHttp3 = _interopRequireDefault(_chaiHttp2);

var _chaiDom2 = require('chai-dom');

var _chaiDom3 = _interopRequireDefault(_chaiDom2);

var _jsdom = require('jsdom');

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

function globals() {
  var vals = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var keys = Object.keys(vals);

  function add() {
    Object.assign(global, vals);
  }
  function remove() {
    keys.forEach(function (key) {
      return delete global[key];
    });
  }

  return { add: add, remove: remove };
}

var expect = _chai2.default.expect;
var spy = _sinon2.default.spy;
var stub = _sinon2.default.stub;

var chaiDom = function chaiDom() {
  return _chai2.default.use(_chaiDom3.default);
};
var chaiHttp = function chaiHttp(app) {
  _chai2.default.use(_chaiHttp3.default);
  return _chai2.default.request(app);
};

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
 * accepts a callback and passed the knex transaction object, calling done
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
exports.jsdom = _jsdom.jsdom;
exports.begin = begin;
exports.rejected = rejected;
exports.$ = $;
exports.$$ = $$;
exports.globals = globals;
exports.chaiDom = chaiDom;
exports.chaiHttp = chaiHttp;
