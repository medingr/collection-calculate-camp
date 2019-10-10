'use strict';
var number_map_to_word_over_26 = function(collection){

  return collection.map(getTranslatedWord);
};
var getTranslatedWord = function(num) {
  for (var ret = '', a = 1, b = 26; (num -= a) >= 0; a = b, b *= 26) {
    ret = (String.fromCharCode(parseInt((num % b) / a) + 65)).toLowerCase() + ret;
    
  }
  return ret;
}
module.exports = number_map_to_word_over_26;
