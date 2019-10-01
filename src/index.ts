export type SingleOrArray<T> = T | readonly T[];

export default function alwaysArray<T>(input: SingleOrArray<T>): readonly T[] {
	return Array.isArray(input) ? input : [input];
}

if (typeof module !== 'undefined') {
	module.exports = alwaysArray;
	module.exports.default = alwaysArray;
}
