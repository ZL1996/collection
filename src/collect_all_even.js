'use strict';

function collect_all_even(collection) {
  var result = [];
  for(var i=0;i<collection.length;i++)
    result = judge(collection[i]);
  return result;
}

function judge(a,b){
  if (a%2 == 0)
    b.push(a);
  return b;
}
module.exports = collect_all_even;
