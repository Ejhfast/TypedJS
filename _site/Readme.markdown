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
    
    // We can do objects, too:
    
    MyObj = {
      //+ MyObj.test_fun :: Number -> Number -> Number
      test_fun:function(num1, num2){
        return num1 + num2;
      }
    }
  
Then load your JavaScript file in a browser window and run:

    TypedJS.run_tests()
    
If you want to instrument your annotated functions to dynamically detect type violations, run:

    TypedJS.run_tests(true)
    
### Types

Currently available primitives:
    
    Number
    String
    Boolean
    
And "ORs" of primitives:

    Number | String   // Number or String
    Boolean | Number  // Boolean or Number
    ...
    
And tuples (T1, T2, ... TN) E.g:

    (Number, String, Boolean, Boolean)  // An example instance => [4,"hello",true,true]
    (Boolean, Boolean)                  // An example instance => [true, false]

And arrays:
    
    [Number]            // Array of number
    [Number | String]   // Array of numbers or strings
    
And objects, which can be nested and mixed with other types E.g:

    {key1: String, key2:[Number], key3:{subkey1:String, subkey2: Number}}
    



    
### License 

Attribution-NonCommercial 3.0 Unported (CC BY-NC 3.0)
