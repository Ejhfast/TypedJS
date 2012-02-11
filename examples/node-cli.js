var TypedJS = require('../typed');
typedjs_parser = require('../typedjs_parser');

function concat(a, b) {
  return a + b;
}

var test = TypedJS.addTest('concat :: String -> String -> String', concat);
TypedJS.go([test]);
