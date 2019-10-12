type SingleOrArray<T> = T | Iterable<T> | readonly T[];

interface Options {
	convertIterables: boolean;
}

/**
 * Makes sure you're dealing with an array.
 * @param input Input that will be converted to an array if it isn't already.
 * @param options.convertIterables [false] Iterables will be spread into an array.
 */
function alwaysArray<T>(
	input: T | T[],
	options?: { convertIterables: false | undefined }
): T[];
function alwaysArray<T>(
	input: Iterable<T>,
	options: { convertIterables: true }
): T[];
function alwaysArray<T>(input: SingleOrArray<T>, options?: Options): T[] {
	options = {
		convertIterables: false,
		...options
	};

	if (Array.isArray(input)) {
		return [...input];
	}

	if (
		options.convertIterables === true &&
		typeof input !== 'string' &&
		input instanceof Object &&
		typeof input[Symbol.iterator] === 'function'
	) {
		return [...input];
	}

	return [input as T];
}

export default alwaysArray;

if (typeof module !== 'undefined') {
	module.exports = alwaysArray;
	module.exports.default = alwaysArray;
}
