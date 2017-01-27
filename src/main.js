'use strict';

const r = require('ramda');

const words = require('./words.js');

module.exports = (integer: number): string => {
	const digits = r.reverse(Array.from(integer.toString()));
	const groups = r.splitEvery(3, digits);
	const transformedGroups = r.map(digits => {
		return digits.reduce((previous, current, index) => [
			words[index][parseInt(current)],
			...previous
		], [])
			.join(' ')
			.replace(/diez cero/g, 'diez')
			.replace(/diez uno/g, 'once')
			.replace(/diez dos/g, 'doce')
			.replace(/diez tres/g, 'trece')
			.replace(/diez cuatro/g, 'catorce')
			.replace(/diez cinco/g, 'quince')
			.replace(/diez /g, 'dieci')
			.replace(/dieciseis/g, 'dieciséis')
			.replace(/veinte y cero/g, 'veinte')
			.replace(/veinte y /g, 'veinti')
		;
	}, groups);

	return [
		...[transformedGroups[3]],
		transformedGroups[3] ? 'mil' : '',
		...[transformedGroups[2]],
		transformedGroups[2] ? 'millones' : '',
		...[transformedGroups[1]],
		transformedGroups[1] ? 'mil' : '',
		...[transformedGroups[0]]
	].join(' ')
		.replace(/(?: y )*cero/g, '')
		.replace(/\s+/g, ' ')
		.replace(/^ | $/g, '')
		.replace(/uno millones/g, 'un millón')
		.replace(/uno mil/g, 'un mil')
		.replace(/^un mil /g, 'mil ')
		.replace(/^un mil$/g, 'mil')
		.replace(/ciento$/g, 'cien')
		.replace(/ciento millones/g, 'cien millones')
		.replace(/ciento mil/g, 'cien mil')
		.replace(/millón mil/g, 'millón')
		.replace(/millones mil/g, 'millones')
	;
};
