'use strict';

var assert = require('assert');
var mequal = require('../');
var result;

// Numbers
// Two
// should pass
result = mequal(1, 1);
assert(result);

// should fails
result = mequal(1, 2);
assert(!result);

// Three
// should pass
result = mequal(1, 1, 1);
assert(result);

// should fails
result = mequal(1, 2, 2);
assert(!result);

// Mooaar
// should pass
result = mequal(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
assert(result);

// should fails
result = mequal(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2);
assert(!result);

// should fails
result = mequal(2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
assert(!result);

// Strings
// Two
// should pass
result = mequal('yo', 'yo');
assert(result);

// should fails
result = mequal('yo', 'elo');
assert(!result);

// Three
// should pass
result = mequal('yo', 'yo', 'yo');
assert(result);

// should fails
result = mequal('yo', 'elo', 'elo');
assert(!result);

// Mooaar
// should pass
result = mequal(
  'yo', 'yo', 'yo', 'yo', 'yo', 'yo', 'yo', 'yo', 'yo', 'yo', 'yo', 'yo'
);
assert(result);

// should fails
result = mequal(
  'yo', 'yo', 'yo', 'yo', 'yo', 'yo', 'yo', 'yo', 'yo', 'yo', 'yo', 'elo'
);
assert(!result);

// should fails
result = mequal(
  'elo', 'yo', 'yo', 'yo', 'yo', 'yo', 'yo', 'yo', 'yo', 'yo', 'yo', 'yo'
);
assert(!result);

// Objects
// Two
// should pass
result = mequal({a:1, b:2, c:3}, {a:1, b:2, c:3});
assert(result);

// should fails
result = mequal({a:1, b:2, c:3}, {a:1, b:2});
assert(!result);

// Three
// should pass
result = mequal({a:1, b:2, c:3}, {a:1, b:2, c:3}, {a:1, b:2, c:3});
assert(result);

// should fails
result = mequal({a:1, b:2, c:3}, {a:1, b:2}, {a:1, b:2});
assert(!result);

// Mooaar
// should pass
result = mequal(
  {a:1, b:2, c:3}, {a:1, b:2, c:3}, {a:1, b:2, c:3}, {a:1, b:2, c:3},
  {a:1, b:2, c:3}, {a:1, b:2, c:3}, {a:1, b:2, c:3}, {a:1, b:2, c:3},
  {a:1, b:2, c:3}, {a:1, b:2, c:3}, {a:1, b:2, c:3}, {a:1, b:2, c:3}
);
assert(result);

// should fails
result = mequal(
  {a:1, b:2, c:3}, {a:1, b:2, c:3}, {a:1, b:2, c:3}, {a:1, b:2, c:3},
  {a:1, b:2, c:3}, {a:1, b:2, c:3}, {a:1, b:2, c:3}, {a:1, b:2, c:3},
  {a:1, b:2, c:3}, {a:1, b:2, c:3}, {a:1, b:2, c:3}, {a:1, b:2}
);
assert(!result);

// should fails
result = mequal(
  {a:1, b:2}, {a:1, b:2, c:3}, {a:1, b:2, c:3}, {a:1, b:2, c:3},
  {a:1, b:2, c:3}, {a:1, b:2, c:3}, {a:1, b:2, c:3}, {a:1, b:2, c:3},
  {a:1, b:2, c:3}, {a:1, b:2, c:3}, {a:1, b:2, c:3}, {a:1, b:2, c:3}
);
assert(!result);
