'use strict';

function get_integer_interval(number_a, number_b) {
    let min = Math.min(number_a,number_b);
    let max = Math.max(number_a,number_b);
    let length = ( max - min ) + 1 ;

    if ( number_a < number_b) {
        return Array.from({length}, (v, index) => index+1); 
    }else
        return Array.from({length}, (v, index) =>  (index * -1) + 5 )

}
module.exports = get_integer_interval;

