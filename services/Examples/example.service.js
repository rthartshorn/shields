'use strict'
const { BaseService } = require('..')

module.exports = class Example extends BaseService {
  static category = 'build'

  static route = {base: 'example', pattern: ':text/:msg'}

  async handle({ text, msg }) {
    return {
      label: text,
      message: msg,
      color: 'blue'
    }
  }
}

