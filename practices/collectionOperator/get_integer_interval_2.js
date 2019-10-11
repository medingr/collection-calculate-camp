'use strict';

function get_integer_interval_2(number_a, number_b) {

  let min = Math.min(number_a,number_b);
  let max = Math.max(number_a,number_b);
  let length = Math.ceil(( max - min )  / 2 );
 
  if ( number_a < number_b) {
    return Array.from({length}, (v, index) => (index + 1) * 2); 
  }
  else
     return Array.from({length}, (v, index) =>  (index * -2) + max );
}

module.exports = get_integer_interval_2;
