var TypedJS = require('../typed');
// typedjs_parser needs to be declared globally for now...
typedjs_parser = require('../typedjs_parser');


// Example function to test...
function concat(a, b) {
  return a + b;
}

// You can manually add tests to TypedJS
// The first parameter is the type signature
// The second parameter is the actual function we'll be testing
var test = TypedJS.addTest('concat :: String -> String -> String', concat);

// Call 'go' to execute the automated tests
// go requires one parameter and it's an Array of the tests to run.
TypedJS.go([test]);
