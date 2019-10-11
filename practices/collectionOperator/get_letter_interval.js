'use strict';

function get_letter_interval(number_a, number_b) {
  let min = Math.min(number_a,number_b);
  let max = Math.max(number_a,number_b);
  let length = ( max - min ) + 1 ;

  if ( number_a < number_b) {
      return Array.from({length}, (v, index) => (toColumnName(index+1)).toLowerCase()); 
  }else
      return Array.from({length}, (v, index) => toColumnName((index * -1) + 5).toLowerCase());
}

function toColumnName(num) {
  for (var ret = '', a = 1, b = 26; (num -= a) >= 0; a = b, b *= 26) {
    ret = String.fromCharCode(parseInt((num % b) / a) + 65) + ret;
  }
  return ret;

}

module.exports = get_letter_interval;
