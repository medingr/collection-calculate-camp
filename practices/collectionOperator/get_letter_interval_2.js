'use strict';

function get_letter_interval_2(number_a, number_b) {
  return number_a.map(x => toColumnName(x));

}

function toColumnName(num) {
  for (var ret = '', a = 1, b = 26; (num -= a) >= 0; a = b, b *= 26) {
    ret = String.fromCharCode(parseInt((num % b) / a) + 65) + ret;
  }
  return ret;
}

module.exports = get_letter_interval_2;

