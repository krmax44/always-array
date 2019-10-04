interface Options {
	convertIterables: boolean;
}

/**
 * Makes sure you're dealing with an array.
 * @param input Input that will be converted to an array if it isn't already.
 * @param options.convertIterables [false] Iterables will be spread into an array.
 */
export default function alwaysArray<T>(
	input: T | T[] | Iterable<T>,
	options?: Options
): T[] {
	options = {
		convertIterables: false,
		...options
	};

	if (
		options.convertIterables === true &&
		input !== null &&
		typeof input !== 'string' &&
		typeof (input as Iterable<T>)[Symbol.iterator] === 'function'
	) {
		return [...(input as Iterable<T>)];
	}

	return Array.isArray(input) ? input : [input as T];
}

if (typeof module !== 'undefined') {
	module.exports = alwaysArray;
	module.exports.default = alwaysArray;
}
