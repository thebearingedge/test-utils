
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

export {
  chai, expect, request, sinon, spy, stub, jsdom, $, $$
}
