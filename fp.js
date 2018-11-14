function compose(...fn) {
  return function(a){
    for(var i = fn.length - 1  ; i >= 0 ; i-- ){
      var _fn = fn[i];
      a = _fn(a);
    }
    return a;
  }
}

function reverse(fn){
  return function(...args) {
     return fn(...args.reverse());
  }
}


function add(a){
   return function (b){
     return a + b;
   }
}

function substract(a){
  return function(b){
    return b - a;
  }
}

function multiply(a) {
    return function(b){
      return a * b;
    }
}

var pipe = reverse(compose);

var _compose = compose(
      add(2),
      substract(40),
      multiply(5));

var _pipe = pipe(
      add(2),
      substract(40),
      multiply(5));

console.log(_compose(10));
console.log(_pipe(10));