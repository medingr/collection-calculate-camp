'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  const SameElements = collection_a.filter( n => collection_a%collection_b(n) );
  return SameElements;
}

module.exports = choose_divisible_integer;
