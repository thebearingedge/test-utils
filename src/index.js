
import { resolve } from 'path'
import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import chaiAsPromised from 'chai-as-promised'
import chaiHttp from 'chai-http'
import chaiDom from 'chai-dom'
import jsdom from 'jsdom'

chai.use(sinonChai)
chai.use(chaiAsPromised)
chai.use(chaiHttp)
chai.use(chaiDom)

require('sinon-as-promised')

const { expect, request } = chai
const { spy, stub } = sinon

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
  const vuePath = resolve(cwd, vueFile)
  const Vue = require('vue')
  Vue.config.async = false
  Vue.config.silent = true
  delete require.cache.vuePath
  return Vue
}

export {
  chai, expect, request, sinon, spy, stub, jsdom, $, $$, Globals, testVue
}
