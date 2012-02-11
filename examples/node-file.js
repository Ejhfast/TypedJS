// This is a really dirty way to get TypedJS running via node.

// You'll need to add typedjs_parser as a global for now.
var TypedJS = require('../typed');
typedjs_parser = require('../typedjs_parser');

// A vm is necessary so you can bind all the global functions to 'window'
var fs = require('fs');
var vm = require('vm');

// Extract the data from the file
var fileData = fs.readFileSync('examples/test.js', 'utf-8');

// Pull in all the global functions into window
window = {};
vm.runInNewContext(fileData, window);


// Run TypedJS on the fileData String.
// TypedJS will parse all your type signatures
// read the functions from 'window' and execute
// the automated tests.
TypedJS.run_tests_on_string(fileData);
