'use strict';

function get_integer_interval_2(number_a, number_b) {
  //write code here
  let iterator = 0;
  let range = [];


    // while ( iterator < number_b){
    //   if (  number_a % 2 != 0 ){
    //     number_a++;
    //   }else{
    //     number_a = number_a + 2;
    //   }
    //   range.push(number_a);
    //   iterator = iterator + 2; 
    // }
   iterator = 5;
    //  while ( iterator !=  0){
    //   if (  number_a % 2 == 0 ){
    //     range.push(number_a);
    //   }
    //   number_a = number_a - 2;
    //   iterator--;
    // }
    return range;

}

module.exports = get_integer_interval_2;
