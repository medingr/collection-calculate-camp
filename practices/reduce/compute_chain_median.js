'use strict';

function compute_chain_median(collection) {
  let mid = collection.split('->').length / 2;
  let median = parseInt(collection[mid])  +  parseInt(collection[mid]);
  return median;
}

module.exports = compute_chain_median;
