
import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import chaiAsPromised from 'chai-as-promised'
import jsdom from 'jsdom'

chai.use(sinonChai)
chai.use(chaiAsPromised)

require('sinon-as-promised')

const { expect } = chai
const { spy, stub } = sinon

export {
  chai, expect, sinon, spy, stub, jsdom,
}
