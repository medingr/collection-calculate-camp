'use strict';

function compute_average(collection) {
 const average = collection => collection.reduce((prev, curr) => prev + curr) / collection.length;
 return average(collection) ;
}

module.exports = compute_average;

