'use strict';

const R = require('ramda');

const toWords = require('./to-words.js');

module.exports = (number: string): string => {
	const reversedDigits = R.reverse(Array.from(number));
	// Note:
	// Flow doesn't support spread operator on strings :(
	// so we are using `Array.from`

	// Some times the "triads" have less than tree elements
	const digitTriads = R.splitEvery(3, reversedDigits);
	const wordTriads = toWords(digitTriads);

	return [
		...[wordTriads[3]],
		wordTriads[3] ? 'mil' : '',
		...[wordTriads[2]],
		wordTriads[2] ? 'millones' : '',
		...[wordTriads[1]],
		wordTriads[1] ? 'mil' : '',
		...[wordTriads[0]]
	].join(' ')
		// Normalize white spaces...
		.replace(/\s+/g, ' ')
		.replace(/^ | $/g, '')
		// ...So now we can remove all wording anomalies
		.replace(/uno millones/g, 'un millón')
		.replace(/uno mil/g, 'un mil')
		.replace(/^un mil /g, 'mil ')// Avoids 'un millon' match
		.replace(/^un mil$/g, 'mil')
		.replace(/ciento$/g, 'cien')
		.replace(/ciento millones/g, 'cien millones')
		.replace(/ciento mil/g, 'cien mil')
		.replace(/millón mil/g, 'millón')
		.replace(/millones mil/g, 'millones')
	;
};
