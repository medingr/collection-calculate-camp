'use strict';

function choose_common_elements(collection_a, collection_b) {

  const SameElements = collection_a.filter( n => collection_b.includes(n) );
  return SameElements;
}

module.exports = choose_common_elements;
