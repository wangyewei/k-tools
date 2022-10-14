import { describe, it } from 'mocha'
import { expect } from 'chai'
import { isNumber, isString, isObject, isArray } from '../index'

describe('type-is', () => {
  const num: number = 1, str: string = 'str', obj: Record<string, any> = {}, arr: Array<any> = [], nl: null = null
  describe('is string', () => {

    it('The type of variable num should not be string', () => {
      expect(isString(num)).to.be.equal(false)
    })

    it('The type of variable str should be string', () => {
      expect(isString(str)).to.be.equal(true)
    })

    it('The type of obj should not be string', () => {
      expect(isString(obj)).to.be.equal(false)
    })

    it('The type of arr should not be string', () => {
      expect(isString(arr)).to.be.equal(false)
    })

  })

  describe('is number', () => {
    it('The type of variable num should not be number', () => {
      expect(isNumber(num)).to.be.equal(true)
    })

    it('The type of variable str should be number', () => {
      expect(isNumber(str)).to.be.equal(false)
    })

    it('The type of obj should not be number', () => {
      expect(isNumber(obj)).to.be.equal(false)
    })

    it('The type of arr should not be number', () => {
      expect(isNumber(arr)).to.be.equal(false)
    })

  })


  describe('is object', () => {
    it('The type of variable num should not be object', () => {
      expect(isObject(num)).to.be.equal(false)
    })

    it('The type of variable str should not be object', () => {
      expect(isObject(str)).to.be.equal(false)
    })

    it('The type of variable obj should  be object', () => {
      expect(isObject(obj)).to.be.equal(true)
    })

    it('The type of variable arr should not be object', () => {
      expect(isObject(arr)).to.be.equal(false)
    })

    it('The variable nl should not be object', () => {
      expect(isObject(nl)).to.be.equal(false)
    })
  })

  describe('is array', () => {
    it('The type of variable num should not be array', () => {
      expect(isArray(num)).to.be.equal(false)
    })

    it('The type of variable str should not be array', () => {
      expect(isArray(str)).to.be.equal(false)
    })

    it('The type of variable obj should not be array', () => {
      expect(isArray(obj)).to.be.equal(true)
    })

    it('The type of variable arr should be array', () => {
      expect(isArray(arr)).to.be.equal(false)
    })

    it('The variable nl should not be object', () => {
      expect(isArray(nl)).to.be.equal(false)
    })
  })

})