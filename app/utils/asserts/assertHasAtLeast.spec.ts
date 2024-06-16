import { describe, expect, it } from 'bun:test'
import { assertHasAtLeast } from './assertHasAtLeast'

describe('assertHasAtLeast', () => {
	const array: number[] = [1, 2, 3, 4, 5]

	it.each([1, 2, 3, 4, 5] as const)('should not throw an error', (value) => {
		expect(() => assertHasAtLeast(array, value, { message: 'wtf' })).not.toThrow()
	})

	it.each([6, 7, 8, 9, 10] as const)('should throw an error', (value) => {
		expect(() => assertHasAtLeast(array, value, { message: 'wtf' })).toThrow('wtf')
	})

	it('should throw an error with the default message when the given message is not specified', () => {
		expect(() => assertHasAtLeast(array, 6)).toThrow(
			'Expected the array to have at least 6 elements, but it has 5 elements.',
		)
	})
})
