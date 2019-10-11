'use strict';

var get_integer_interval = require('../../practices/collectionOperator/get_integer_interval.js');

describe('get_integer_interval', function () {

  var collection_a = [1, 2, 3, 4, 5];
  var collection_b = [5, 4, 3, 2, 1];

  it('', function() {

    var result = get_integer_interval(1, 5);
    expect(result).toEqual(collection_a);
  });

  it('', function() {

    var result = get_integer_interval(5, 1);
    expect(result).toEqual(collection_b);
  });

  it('', function() {

    var result = get_integer_interval(5, 5);
    expect(result).toEqual([5]);
  });
});
