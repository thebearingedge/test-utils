
import { join } from 'path'
import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import chaiAsPromised from 'chai-as-promised'
import chaiInterface from 'chai-interface'
import _chaiHttp from 'chai-http'
import _chaiDom from 'chai-dom'
import { jsdom } from 'jsdom'

chai.use(sinonChai)
chai.use(chaiAsPromised)
chai.use(chaiInterface)

import 'sinon-as-promised'

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

function testVue(config) {
  const cwd = process.cwd()
  const vueFile = 'node_modules/vue/dist/vue.common.js'
  const vuePath = join(cwd, vueFile)
  const Vue = require('vue')
  Object.assign(Vue.config, config)
  delete require.cache[require.resolve(vuePath)]
  return Vue
}

function testBean() {
  const cwd = process.cwd()
  const beanFile = 'node_modules/bean/bean.js'
  const beanPath = join(cwd, beanFile)
  const bean = require('bean')
  delete require.cache[require.resolve(beanPath)]
  return bean
}

const { expect } = chai
const { spy, stub } = sinon

const chaiDom = () => chai.use(_chaiDom)
const chaiHttp = app => {
  chai.use(_chaiHttp)
  return chai.request(app)
}

const rejected = promise => promise.catch(err => err)

const begin = (knex, ready) => {
  return done => {
    rejected(knex.transaction(trx => {
      ready(trx)
      done()
    }))
  }
}

export {
  expect, spy, stub, jsdom, begin,
  rejected, $, $$, Globals, testVue, testBean, chaiDom, chaiHttp
}
