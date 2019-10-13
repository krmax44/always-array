/**
 * Makes sure you're dealing with an array.
 * @param input Input that will be converted to an array if it isn't already.
 */
export default function alwaysArray<T>(input: T | readonly T[]): T[] {
	return Array.isArray(input) ? [...input] : [input];
}

/**
 * Makes sure you're dealing with an array. Iterables will be spread into an array.
 * @param input Input that will be converted to an array if it isn't already.
 */
export function convertIterables<T>(
	input: T | readonly T[] | Iterable<T>
): T[] {
	if (
		typeof input !== 'string' &&
		input instanceof Object &&
		typeof input[Symbol.iterator] === 'function'
	) {
		return [...input];
	}

	return [input as T];
}

if (typeof module !== 'undefined') {
	module.exports = alwaysArray;
	module.exports.default = alwaysArray;
	module.exports.convertIterables = convertIterables;
}
