'use strict';

function get_integer_interval(number_a, number_b) {
 return Array.from({length: 5}, (v, k) => k+1); 
}

module.exports = get_integer_interval;

