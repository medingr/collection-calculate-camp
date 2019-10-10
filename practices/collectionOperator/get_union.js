'use strict';

function get_union(collection_a, collection_b) {
var union = [...new Set([...collection_a, ...collection_b])];
return union;
}

module.exports = get_union;

