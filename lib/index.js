'use strict'

var _createClass = (function () { function defineProperties (target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor } }())

function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

var fn = function fn (a, b) {
  return a + b
}

var Demo = (function () {
  function Demo () {
    _classCallCheck(this, Demo)
  }

  _createClass(Demo, [{
    key: 'test',
    value: function test () {
      console.log('test')
    }
  }])

  return Demo
}())

console.log(fn(1, 2), new Demo())
