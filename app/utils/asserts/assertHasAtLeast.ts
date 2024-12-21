import type { ArrayAtLeast } from '../types/ArrayAtLeast'
import type { NumberRange } from '../types/NumberRange'

/**
 * Asserts that an array has at least a certain number of elements.
 * @param value The array to check.
 * @param n The minimum number of elements required.
 * @param options An optional object of options. See {@link Options} for more information.
 * @throws If the array has less than N elements and no error message is provided.
 */
export function assertHasAtLeast<T, N extends NumberRange<1, 10>>(
	value: T[],
	n: N,
	options: Options = {},
): asserts value is ArrayAtLeast<T, N> {
	const {
		message = `Expected the array to have at least ${n} elements, but it has ${value.length} elements.`,
	} = options

	if (value.length < n) throw new Error(message)
}

/**
 * Options for the {@link assertHasAtLeast} function.
 */
type Options = {
	/** An optional error message to throw if the assertion fails. */
	message?: string
}
