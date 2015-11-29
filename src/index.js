
import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import chaiAsPromised from 'chai-as-promised'
import chaiHttp from 'chai-http'
import jsdom from 'jsdom'

chai.use(sinonChai)
chai.use(chaiAsPromised)
chai.use(chaiHttp)

require('sinon-as-promised')

const { expect, request } = chai
const { spy, stub } = sinon

export {
  chai, expect, request, sinon, spy, stub, jsdom,
}
