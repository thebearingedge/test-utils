
import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import chaiAsPromised from 'chai-as-promised'
import chaiInterface from 'chai-interface'
import supertest from 'supertest-as-promised'

chai.use(sinonChai)
chai.use(chaiAsPromised)
chai.use(chaiInterface)

import 'sinon-as-promised'

export const $ = ((node, selector) => node.querySelector(selector))
export const $$ = ((node, selector) => Array.from(node.querySelectorAll(selector)))


export const { expect } = chai
export const { spy, stub } = sinon

/**
 * rejected: pass a promise and catch its rejected reason
 */

export const rejected = promise => promise.catch(err => err)

/**
 * begin: for mocha tests, passed as the callback to a hook
 * accepts a callback and passes the knex transaction object, calling done
 */

export const begin = (knex, ready) => {
  return done => {
    rejected(knex.transaction(trx => {
      ready(trx)
      done()
    }))
  }
}


export const skipSlow = _ => {

  function throwError() { throw new Error('skipSlow only works in mocha') }

  const { it } = global

  if (!it) return throwError

  return process.env.SLOW_TESTS ? it : it.skip
}


export const request = supertest
