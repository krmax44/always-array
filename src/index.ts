export default function alwaysArray<T>(input: T | T[]): T[] {
	return Array.isArray(input) ? input : [input];
}

if (typeof module !== 'undefined') {
	module.exports = alwaysArray;
	module.exports.default = alwaysArray;
}
