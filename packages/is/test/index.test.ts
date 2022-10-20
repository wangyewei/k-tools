import { describe, it } from 'mocha'
import { expect } from 'chai'
// 判断变量是否为数组
import { isArray } from '..'

describe('type check', () => {
  const arr: Array<any> = [], obj: Record<string, any> = {}

  it('arr is array', () => {
    expect(isArray(arr)).to.be.equal(true)
  })

  it('obj is not array', () => {
    expect(isArray(obj)).to.be.equal(false)
  })

})