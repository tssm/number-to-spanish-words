I developed this in a rush for a client. We work with numbers as
large as a couple of millions and that have a maximum of two
decimals. There are a severals improvements that I would like to
do (patches are welcome!) but by the moment it's working well for
my case so I decided to jump from alpha to stable.

# Install

    npm install number-to-spanish-words

# Usage

    const numberToSpanishWords = require('number-to-spanish-words');
    numberToSpanishWords(10359); // "diez mil trecientos cincuenta y nueve"

# How it works

I realised that in Spanish every number is built from cent to
cent, for example:

-   **Ciento cuarenta y uno** (one hundred and forty one)
-   Quince mil **ciento cuarenta y uno** (fifteen thousands and
    one hundred and forty one)
-   **Ciento cuarenta y un** mil
-   **Ciento cuarenta y un** mil docientos tres
-   **Cuento cuarenta y un** millones

So first we split the number between the integer part and the
fractional part and then we process both parts the same way:

1.  Divide the number each tree digits
2.  Transform each digit into a word,
3.  Concatenate each tree digits
4.  Eliminate anomalies (i. e. transform _diez y cuatro_ into
    _catorce_)
5.  Join everything using _mil_, _millones_, and/or _mil millones_

This last part is pretty ugly and I would like to improve it.
After that I would like to process bigger numbers (up to a
_billón_).

I plan to replace all JavaScript array methods with Ramda because
I have been surprised by some native methods that mutate the array
instead to return a new one.
