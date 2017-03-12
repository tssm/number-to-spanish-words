'use strict';

const t = require('tape');
const integerToSpanishWords = require('../build/main.js');

t('Test units', (t) => {
	t.equal(integerToSpanishWords(8), 'ocho', 'Should be eight');
	t.equal(integerToSpanishWords(8.3), 'ocho coma tres', 'Should be eight point tree');
	t.end();
});

t('Test tens', (t) => {
	t.equal(integerToSpanishWords(10), 'diez', 'Should be ten');
	t.equal(integerToSpanishWords(10.090), 'diez coma cero nueve', 'Should be 10.090');
	t.equal(integerToSpanishWords(10.09), 'diez coma cero nueve', 'Should be 10.09');
	t.equal(integerToSpanishWords(10.009), 'diez coma cero cero nueve', 'Should be 10.009');
	t.equal(integerToSpanishWords(10.00901), 'diez coma cero cero novecientos uno', 'Should be 10.00901');
	t.equal(integerToSpanishWords(11), 'once', 'Should be eleven');
	t.equal(integerToSpanishWords(16), 'dieciséis', 'Should be sixteen');
	t.equal(integerToSpanishWords(20), 'veinte', 'Should be twenty');
	t.equal(integerToSpanishWords(22), 'veintidos', 'Should be twenty two');
	t.equal(integerToSpanishWords(22.3502), 'veintidos coma tres mil quinientos dos', 'Should be 22.3502');
	t.equal(integerToSpanishWords(30), 'treinta', 'Should be thirty');
	t.equal(integerToSpanishWords(33), 'treinta y tres', 'Should be thirty tree');
	t.equal(integerToSpanishWords(44), 'cuarenta y cuatro', 'Should be forty four');
	t.end();
});

t('Test hundreds', (t) => {
	t.equal(integerToSpanishWords(100), 'cien', 'Should be one hundred');
	t.equal(integerToSpanishWords(101), 'ciento uno', 'Should be one hundred and one');
	t.equal(integerToSpanishWords(110), 'ciento diez', 'Should be one hundred ten');
	t.equal(integerToSpanishWords(132), 'ciento treinta y dos', 'Should be one hundred and thirty two');
	t.end();
});

t('Test thousands', (t) => {
	t.equal(integerToSpanishWords(1000), 'mil', 'Should be one thousand');
	t.equal(integerToSpanishWords(1001), 'mil uno', 'Should be one thousand one');
	t.equal(integerToSpanishWords(1010), 'mil diez', 'Should be one thousand ten');
	t.equal(integerToSpanishWords(1002), 'mil dos', 'Should be one thousand and two');
	t.equal(integerToSpanishWords(1132), 'mil ciento treinta y dos', 'Should be one thousand and thirty two');
	t.equal(integerToSpanishWords(2503), 'dos mil quinientos tres', 'Should be 2503');
	t.equal(integerToSpanishWords(10000), 'diez mil', 'Should be ten thousand');
	t.equal(integerToSpanishWords(22503), 'veintidos mil quinientos tres', 'Should be 22503');
	t.equal(integerToSpanishWords(100000), 'cien mil', 'Should be 100000');
	t.equal(integerToSpanishWords(111111), 'ciento once mil ciento once', 'Should be 111111');
	t.equal(integerToSpanishWords(142503), 'ciento cuarenta y dos mil quinientos tres', 'Should be 142503');
	t.end();
});

t('Test millions', (t) => {
	t.equal(integerToSpanishWords(1000000), 'un millón', 'Should be one million');
	t.equal(integerToSpanishWords(1000001), 'un millón uno', 'Should be one million one');
	t.equal(integerToSpanishWords(1000010), 'un millón diez', 'Should be one million ten');
	t.equal(integerToSpanishWords(1201309), 'un millón docientos un mil trecientos nueve', 'Should be 1201309');
	t.equal(integerToSpanishWords(3142503), 'tres millones ciento cuarenta y dos mil quinientos tres', 'Should be 3142503');
	t.equal(integerToSpanishWords(10000000), 'diez millones', 'Should be ten millions');
	t.equal(integerToSpanishWords(11111111), 'once millones ciento once mil ciento once', 'Should be 11111111');
	t.equal(integerToSpanishWords(100000000), 'cien millones', 'Should be 100000000');
	t.equal(integerToSpanishWords(303142503), 'trecientos tres millones ciento cuarenta y dos mil quinientos tres', 'Should be 303142503');
	t.equal(integerToSpanishWords(1000000000), 'mil millones', 'Should be 1000000000');
	t.equal(integerToSpanishWords(1303142503), 'mil trecientos tres millones ciento cuarenta y dos mil quinientos tres', 'Should be 1303142503');
	t.equal(integerToSpanishWords(10000000000), 'diez mil millones', 'Should be 10000000000');
	t.equal(integerToSpanishWords(100000000000), 'cien mil millones', 'Should be 100000000000');
	t.equal(integerToSpanishWords(180800300003), 'ciento ochenta mil ochocientos millones trecientos mil tres', 'Should be 180800300003');
	t.end();
})
