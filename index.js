'use strict';

var deepEqual = function(x, y) {
  if (x === y) {
    return true;
  }
  if (!(x instanceof Object) || ! (y instanceof Object)) {
    return false;
  }
  if (x.constructor !== y.constructor) {
    return false;
  }
  for (var p in x) {

    if (! x.hasOwnProperty(p)) {
      continue;
    }

    if (! y.hasOwnProperty(p)) {
      return false;
    }

    if (x[p] === y[p]) {
      continue;
    }

    if (typeof(x[p]) !== 'object') {
      return false;
    }

    if (! Object.equals(x[p],  y[p])) {
      return false;
    }
  }
  for (p in y) {
    if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) {
      return false;
    }
  }
  return true;
};

var multipleEqual = function(){
  var args = Array.prototype.slice.call(arguments);
  return args.slice(1).every(
    function(element) {
      return deepEqual(args[0], element);
    }
 );
};

module.exports = multipleEqual;
