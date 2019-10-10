'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  const notSameElements = collection_a.filter( n => !collection_b.includes(n) );
  return notSameElements;
}

module.exports = choose_no_common_elements;
