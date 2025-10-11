/* global describe, it */
import assert from 'assert'
import { passesWcagAaLargeText, passesWcagAa, passesWcagAaa } from '../build/index.js'

describe('Built output', () => {
  it('should export working ESM modules', () => {
    assert.strictEqual(typeof passesWcagAaLargeText, 'function')
    assert.strictEqual(typeof passesWcagAa, 'function')
    assert.strictEqual(typeof passesWcagAaa, 'function')
  })

  it('should evaluate WCAG compliance correctly from built output', () => {
    assert.strictEqual(passesWcagAaLargeText('#333', '#777'), false)
    assert.strictEqual(passesWcagAa('black', 'darkgoldenrod'), true)
    assert.strictEqual(passesWcagAaa('black', 'darkgoldenrod'), false)
  })
})
