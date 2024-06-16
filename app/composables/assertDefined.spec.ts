import { describe, expect, it } from 'bun:test'
import { computed, ref } from 'vue'
import { assertDefined } from './assertDefined'

describe('assertDefined', () => {
	it('should support refs', () => {
		const definedRef = ref('test')
		const undefinedRef = ref(undefined)
		const nullRef = ref(null)

		expect(() => assertDefined(definedRef)).not.toThrow()
		expect(() => assertDefined(undefinedRef)).toThrow()
		expect(() => assertDefined(nullRef)).toThrow()
	})

	it('should support computed refs', () => {
		const definedComputed = computed(() => 'test')
		const undefinedComputed = computed(() => undefined)
		const nullComputed = computed(() => null)

		expect(() => assertDefined(definedComputed)).not.toThrow()
		expect(() => assertDefined(undefinedComputed)).toThrow()
		expect(() => assertDefined(nullComputed)).toThrow()
	})

	it('should support getters', () => {
		const definedGetter = () => 'test'
		const undefinedGetter = () => undefined
		const nullGetter = () => null

		expect(() => assertDefined(definedGetter)).not.toThrow()
		expect(() => assertDefined(undefinedGetter)).toThrow()
		expect(() => assertDefined(nullGetter)).toThrow()
	})

	it('should support values', () => {
		const definedValue = 'test'
		const undefinedValue = undefined
		const nullValue = null

		expect(() => assertDefined(definedValue)).not.toThrow()
		expect(() => assertDefined(undefinedValue)).toThrow()
		expect(() => assertDefined(nullValue)).toThrow()
	})

	it('should throw specified error message', () => {
		const undefinedValue = undefined
		const message = 'wtf'

		expect(() => assertDefined(undefinedValue, { message })).toThrow(message)
	})
})
