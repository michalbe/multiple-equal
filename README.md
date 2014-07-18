# multiple-equal by [@michalbe](http://github.com/michalbe) #
Check if multiple values are deeply equivalent

### What? ###
multiple-equal takes multiple values as arguments and check if they are deeply equal (works with arrays, objects & primitives)

```javascript

var mequal = require('multiple-equal');

var one = {a:1, b:2, c:3};
var two = {b:2, a:1, c:3};
var three = {c:3, a:1, b:2};

mequal(one, two, three); // true;
```
