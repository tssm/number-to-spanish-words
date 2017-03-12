'use strict';

const R = require('ramda');

const words = require('./words.js');

// NOTE: 
// We need the index, that's why I'm not using Ramda's reduce

module.exports = (triads: Array<Array<string>>): string => {
	return R.map(digits => {
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
			.replace(/(?: y )*cero/g, '')
		;
	}, triads);
};
