type SingleOrArray<T> = T | Iterable<T> | readonly T[];

interface Options {
	convertIterables: boolean;
}

/**
 * Makes sure you're dealing with an array.
 * @param input Input that will be converted to an array if it isn't already.
 * @param options.convertIterables [false] Iterables will be spread into an array.
 */
function alwaysArray(input: string, options?: Options): [string];
function alwaysArray<T>(input: T[], options?: Options): T[];
function alwaysArray<T>(input: T, options?: { convertIterables: false }): [T];
function alwaysArray<T>(
	input: Iterable<T>,
	options?: { convertIterables: true }
): T[];
function alwaysArray<T>(input: SingleOrArray<T>, options?: Options): T[] {
	options = {
		convertIterables: false,
		...options
	};

	const isArray = Array.isArray(input);

	const isIterable =
		isArray ||
		(options.convertIterables === true &&
			input !== null &&
			typeof input !== 'string' &&
			typeof (input as Iterable<T>)[Symbol.iterator] === 'function');

	return isIterable ? [...(input as Iterable<T>)] : [input as T];
}

export default alwaysArray;

if (typeof module !== 'undefined') {
	module.exports = alwaysArray;
	module.exports.default = alwaysArray;
}

