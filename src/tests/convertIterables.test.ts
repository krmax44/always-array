import { expect } from 'chai';
import { convertIterables } from '..';
import 'mocha';

describe('convert iterables', () => {
	it('should spread the iterable', () => {
		const result = convertIterables(new Set([1, 2, 3]));

		expect(result).to.eql([1, 2, 3]);
	});

	it("shouldn't spread strings", () => {
		const string = convertIterables('foo');

		expect(string).to.eql(['foo']);
	});
});
