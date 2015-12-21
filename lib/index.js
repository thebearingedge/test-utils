'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chaiHttp = exports.chaiDom = exports.testVue = exports.Globals = exports.$$ = exports.$ = exports.rejected = exports.jsdom = exports.stub = exports.spy = exports.expect = undefined;

var _path = require('path');

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _sinonChai = require('sinon-chai');

var _sinonChai2 = _interopRequireDefault(_sinonChai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _chaiHttp2 = require('chai-http');

var _chaiHttp3 = _interopRequireDefault(_chaiHttp2);

var _chaiDom2 = require('chai-dom');

var _chaiDom3 = _interopRequireDefault(_chaiDom2);

var _jsdom = require('jsdom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_chai2.default.use(_sinonChai2.default);
_chai2.default.use(_chaiAsPromised2.default);

require('sinon-as-promised');

var $ = function $(node, selector) {
  return node.querySelector(selector);
};
var $$ = function $$(node, selector) {
  return Array.from(node.querySelectorAll(selector));
};

var Globals = (function () {
  function Globals() {
    var globals = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Globals);

    this.keys = Object.keys(globals);
    this.globals = globals;
  }

  _createClass(Globals, [{
    key: 'add',
    value: function add() {
      Object.assign(global, this.globals);
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.keys.forEach(function (key) {
        return delete global[key];
      });
    }
  }]);

  return Globals;
})();

function testVue() {
  var cwd = process.cwd();
  var vueFile = 'node_modules/vue/dist/vue.common.js';
  var vuePath = (0, _path.join)(cwd, vueFile);
  var Vue = require('vue');
  Vue.config.async = false;
  Vue.config.silent = true;
  delete require.cache[require.resolve(vuePath)];
  return Vue;
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

var rejected = function rejected(promise) {
  return promise.catch(function (err) {
    return err;
  });
};

exports.expect = expect;
exports.spy = spy;
exports.stub = stub;
exports.jsdom = _jsdom.jsdom;
exports.rejected = rejected;
exports.$ = $;
exports.$$ = $$;
exports.Globals = Globals;
exports.testVue = testVue;
exports.chaiDom = chaiDom;
exports.chaiHttp = chaiHttp;
