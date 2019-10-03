import { expect } from 'chai';
import alwaysArray from '..';
import 'mocha';

describe('convert iterables', () => {
	it('should spread the iterable', () => {
		const result = alwaysArray(new Set([1, 2, 3]), { convertIterables: true });

		expect(result).to.eql([1, 2, 3]);
	});

	it("shouldn't spread the iterable", () => {
		const result = alwaysArray(new Set([1, 2, 3]));
		expect(result).to.eql([new Set([1, 2, 3])]);
	});
});
