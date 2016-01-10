
import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import chaiAsPromised from 'chai-as-promised'
import chaiInterface from 'chai-interface'
import jsdom from 'jsdom'

chai.use(sinonChai)
chai.use(chaiAsPromised)
chai.use(chaiInterface)

import 'sinon-as-promised'

const $ = ((node, selector) => node.querySelector(selector))
const $$ = ((node, selector) => Array.from(node.querySelectorAll(selector)))


function globals(vals = {}) {

  const keys = Object.keys(vals)

  function add() { Object.assign(global, vals) }
  function remove() { keys.forEach(key => delete global[key]) }

  return { add, remove }
}

const { expect } = chai
const { spy, stub } = sinon

/**
 * rejected: pass a promise and catch its rejected reason
 */

const rejected = promise => promise.catch(err => err)

/**
 * begin: for mocha tests, passed as the callback to a hook
 * accepts a callback and passes the knex transaction object, calling done
 */

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
  rejected, $, $$, globals, chai
}
