'use strict';

const R = require('ramda');

const transform = require('./transform.js');

module.exports = (number: number): string => {
	// TODO: Avoid string conversion?
	const numberAsString = R.toString(number);
	const [ integerPart, fractionalPart ] = R.split('.', numberAsString);

	const transformedIntegerPart = transform(integerPart);

	const fractionalLeadingZeroes = R.replace(/0/g, 'cero ', R.match(/^0+/, fractionalPart || '')[0] || '');
	const fractionalWithoutLeadingZeroes = transform(R.replace(/^0+/, '', fractionalPart || ''));
	const transformedFractionalPart = (fractionalPart
		? ' coma '
			+ fractionalLeadingZeroes
			+ fractionalWithoutLeadingZeroes
		: '');

	return transformedIntegerPart + transformedFractionalPart;
};
