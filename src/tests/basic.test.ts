import { expect } from 'chai';
import alwaysArray from '..';
import 'mocha';

describe('basic test', () => {
	it('should always be an array', () => {
		const a = alwaysArray('foo');
		const b = alwaysArray(['foo']);
		const c = alwaysArray([]);
		const d = alwaysArray(undefined);

		expect(a).to.eql(['foo']);
		expect(b).to.eql(['foo']);
		expect(c).to.eql([]);
		expect(d).to.eql([undefined]);
	});
});
