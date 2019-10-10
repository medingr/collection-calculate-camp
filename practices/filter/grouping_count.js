'use strict';

function grouping_count(collection) {
  const resultSet = new Array;
  [...new Set(collection)]
  .map(
      num => resultSet.push( toString(num) , 
      collection.filter(y => y === num).length )
  );
  return resultSet;

}

module.exports = grouping_count;
