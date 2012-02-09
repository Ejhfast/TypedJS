## TypedJS

Basic, automatic JavaScript testing. Requires jQuery. This is just a start. TypedJS will soon provide more complex forms of program specification, and analysis. The goal: safe, correct JavaScript.

(Warning: In need of some refactoring).

### Usage

First, annotate your javascript functions with Haskell-like type signatures:

    //+ char_first :: Char -> Char -> Char
    
    function char_first(c1,c2){
      return c1;
    }

    //+ my_prop :: {name:String, valid:Boolean} -> Boolean

    function my_prop(obj){
      if(obj.valid === true){
        return "true"; // Error, we are 
      }                // returning a string here
      else{
        return obj.valid;
      }
    };
  
Then load your JavaScript file in a browser window and run:

    TypedJS.run_tests()
    
If you want to instrument your annotated functions to dynamically detect type violations, run:

    TypedJS.run_tests(true)
    
### License 

Attribution-NonCommercial 3.0 Unported (CC BY-NC 3.0)
