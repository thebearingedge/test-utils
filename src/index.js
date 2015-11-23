
import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import chaiAsPromised from 'chai-as-promised'
import jsdom from 'jsdom'
import rootRequire from 'root-require'

chai.use(sinonChai)
chai.use(chaiAsPromised)

const { expect } = chai
const { spy, stub } = sinon

export {
  chai, expect, sinon, spy, stub, jsdom, rootRequire,
}
