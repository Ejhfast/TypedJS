### TypedJS

Automatic JavaScript testing

## Usage

First, annotate your javascript functions with Haskell-like syntax:

  //+ my_func :: Number -> String -> [Number]
  
Then load your JavaScript file in a browser window and run:

 TypedJS.run_tests()
