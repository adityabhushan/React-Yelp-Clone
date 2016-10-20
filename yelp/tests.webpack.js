require('babel-polyfill')

let chai = require('chai')
let chaiEnzyme = require('chai-enzyme')
chai.use(chaiEnzyme())

let context = require.context('./src', true, /\.spec\,js$/)
context.keys().forEach(context)
