import { describe, it } from 'mocha'
import { expect } from 'chai'
import { isString } from '../index'

describe('type-is', () => {
  describe('is-string', () => {
    it("'a' should be string", () => {
      const a: string = 'string'
      expect(isString(a)).to.be.equal(true)
    })
  })
})