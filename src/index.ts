export default function alwaysArray<T>(input: T | readonly T[]): readonly T[] {
	return Array.isArray(input) ? input : [input];
}

if (typeof module !== 'undefined') {
	module.exports = alwaysArray;
	module.exports.default = alwaysArray;
}
