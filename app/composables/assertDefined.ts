import { toValue } from 'vue'

/**
 * Guards that a value is not `null` or `undefined`.
 * @param v The value to check.
 * @param options Options. See {@link Options}.
 * @example
 * const video = ref<HTMLVideoElement | null>(null)
 *
 * function play() {
 *   assertDefined(video) // Throws an error if `video.value` is `null` or `undefined`.
 *
 *   video.value.play()
 * }
 */
export function assertDefined<T>(
	v: Ref<T>,
	options?: Options,
): asserts v is Ref<Exclude<T, null | undefined>>

export function assertDefined<T>(
	v: ComputedRef<T>,
	options?: Options,
): asserts v is ComputedRef<Exclude<T, null | undefined>>

export function assertDefined<T>(v: T, options?: Options): asserts v is Exclude<T, null | undefined>

export function assertDefined<T>(v: Ref<T>, options: Options = {}): void {
	const { message = 'Value is undefined or null' } = options

	if (toValue(v) == null) throw new Error(message)
}

type Options = {
	/** An error message to throw if the assertion fails. */
	message?: string
}
