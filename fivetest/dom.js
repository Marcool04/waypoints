global.document = {
  documentElement: {
    clientHeight: 63
  }
}
var chai = require('chai')
var sinon = require('sinon')
var sinonChai = require('sinon-chai')
chai.use(sinonChai)
var expect = chai.expect
var DOM = require('../source/dom')()

function createDOM (options) {
  options = options || {}
  var element = {
    ownerDocument: sinon.spy()
  }
  if (options.isWindow) {
    element.window = element
  }
  return new DOM(element)
}

describe('DOM', function () {
  describe('#innerHeight', function () {
    describe('when the element is a window', function () {
      beforeEach(function () {
        this.dom = createDOM({ isWindow: true })
      })

      describe('and window has an innerHeight', function () {
        beforeEach(function () {
          this.dom.element.innerHeight = 42
        })

        it('returns the innerHeight', function () {
          expect(this.dom.innerHeight()).to.equal(42)
        })
      })

      describe('and innerHeight does not exist', function () {
        it('returns the document client height', function () {
          expect(this.dom.innerHeight()).to.equal(63)
        })
      })
    })

    describe('when the element is not a window', function () {
      beforeEach(function () {
        this.dom = createDOM()
        this.dom.element.clientHeight = 42
      })

      it('returns the client height of the element', function () {
        expect(this.dom.innerHeight()).to.equal(42)
      })
    })
  })

  describe('#innerWidth', function () {
    it('needs specs')
  })

  describe('#outerHeight', function () {
    it('needs specs')
  })

  describe('#outerWidth', function () {
    it('needs specs')
  })

  describe('#scrollLeft', function () {
    it('needs specs')
  })

  describe('#scrollTop', function () {
    it('needs specs')
  })

  describe('#on', function () {
    it('needs specs')
  })

  describe('#off', function () {
    it('needs specs')
  })

  describe('#removeListeners', function () {
    it('needs specs')
  })

  describe('#offset', function () {
    it('needs specs')
  })

  describe('#viewportHeight', function () {
    it('needs specs')
  })

  describe('#viewportWidth', function () {
    it('needs specs')
  })
})

