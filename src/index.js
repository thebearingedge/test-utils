
import { join } from 'path'
import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import chaiAsPromised from 'chai-as-promised'
import _chaiHttp from 'chai-http'
import _chaiDom from 'chai-dom'
import { jsdom } from 'jsdom'

chai.use(sinonChai)
chai.use(chaiAsPromised)

require('sinon-as-promised')

const $ = ((node, selector) => node.querySelector(selector))
const $$ = ((node, selector) => Array.from(node.querySelectorAll(selector)))

class Globals {

  constructor(globals = {}) {
    this.keys = Object.keys(globals)
    this.globals = globals
  }

  add() { Object.assign(global, this.globals) }

  remove() { this.keys.forEach(key => delete global[key]) }

}

function testVue() {
  const cwd = process.cwd()
  const vueFile = 'node_modules/vue/dist/vue.common.js'
  const vuePath = join(cwd, vueFile)
  const Vue = require('vue')
  Vue.config.async = false
  Vue.config.silent = true
  delete require.cache[require.resolve(vuePath)]
  return Vue
}

const { expect } = chai
const { spy, stub } = sinon

const chaiDom = () => chai.use(_chaiDom)
const chaiHttp = app => {
  chai.use(_chaiHttp)
  return chai.request(app)
}

export {
  expect, spy, stub, jsdom, $, $$, Globals, testVue, chaiDom, chaiHttp
}
